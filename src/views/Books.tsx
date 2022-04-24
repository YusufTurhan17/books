import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { fetchBooks } from '../service'

import useDebounce from '../hooks/useDebounce'

import Container from '../components/container/Container'
import Input from '../components/input/Input'
import Button from '../components/button/Button'
import View from '../components/view/View'
import Text from '../components/text/Text'
import Books from '../components/books/Books'

const BookList = () => {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword: string = useDebounce<string>(keyword, 800)
  const [page, setPage] = useState(1)

  const { data, isError, isLoading, isPreviousData } = useQuery(
    ['books', page, debouncedKeyword],
    () => fetchBooks(page, debouncedKeyword),
    {
      keepPreviousData: true,
      staleTime: 5000
    }
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <Container>
        <Input
          mb="50px"
          type="search"
          placeholder="Ara.."
          onChange={handleChange}
          value={keyword}
        />
        {data?.count === 0 ? (
          <Text>Veri yok</Text>
        ) : (
          <Books books={data?.results ?? []} />
        )}
        <View
          display="flex"
          justifyContent="space-between"
          flexDirection={['column', 'row']}
          mt="50px"
          mb="100px"
        >
          <Button
            variant="primary"
            onClick={() => setPage((old) => Math.max(old - 1, 0))}
            disabled={page === 1}
          >
            Önceki Sayfa
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setPage((old) => (data?.next ? old + 1 : old))
            }}
            disabled={isPreviousData || !data?.next}
          >
            Sonraki Sayfa
          </Button>
        </View>
      </Container>
    </>
  )
}

export default BookList
