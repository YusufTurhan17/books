import { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { fetchBookIds } from '../service'
import useLocalState from '../hooks/useLocalState'
import useDebounce from '../hooks/useDebounce'

import Container from '../components/container/Container'
import Input from '../components/input/Input'
import View from '../components/view/View'
import Text from '../components/text/Text'
import Button from '../components/button/Button'
import Books from '../components/books/Books'

const BookList = () => {
  const [keyword, setKeyword] = useState('')
  const debouncedKeyword: string = useDebounce<string>(keyword, 800)
  const [page, setPage] = useState(1)
  const [favoritesBookIds] = useLocalState('books')

  const { data, isError, isLoading, isPreviousData } = useQuery(
    ['favoriteBooks', page, debouncedKeyword],
    () =>
      favoritesBookIds
        ? fetchBookIds(page, debouncedKeyword, favoritesBookIds)
        : null,
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
        {data?.next ? (
          <Input
            mb="50px"
            type="search"
            placeholder="Ara.."
            onChange={handleChange}
            value={keyword}
          />
        ) : null}
        {data?.count === 0 ? (
          <Text>Veri yok</Text>
        ) : (
          <Books books={data?.results ?? []} />
        )}
        <View
          display="flex"
          justifyContent="space-between"
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
