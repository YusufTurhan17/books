import { useQuery } from 'react-query'

import { fetchBook } from '../../service'
import Image from '../image/Image'
import View from '../view/View'
import Title from '../title/Title'
import Text from '../text/Text'
import List, { ListItem } from '../list/List'

import Container from '../container/Container'

interface BookProps {
  id: string
}

const Book = ({ id }: BookProps) => {
  const { data, isError, isLoading } = useQuery(
    ['book', id],
    () => fetchBook(id),
    {
      keepPreviousData: true,
      staleTime: 5000
    }
  )

  if (isLoading) return <p>Yükleniyor</p>
  if (isError) return <p>Bir hata oluştu</p>
  if (!data) return null

  return (
    <Container>
      <View mb="20px" mt="20px">
        <Title tagName="h1">{data.title}</Title>
      </View>

      <View display="flex" flexDirection={['column', 'row']}>
        {data.formats['image/jpeg'] ? (
          <Image width="300px" src={data.formats['image/jpeg']} />
        ) : null}

        <View mt="20px" ml={['20px', '50px']}>
          <Text tagName="strong">Konu:</Text>
          <List>
            {data.subjects.map((subject) => {
              return <ListItem key={subject}>{subject}</ListItem>
            })}
          </List>

          <View mt="10px">
            <Text tagName="strong">Diller:</Text>
            {data.languages}
          </View>

          <View mt="10px">
            <Text tagName="strong">Yazarlar:</Text>
            {data.authors.map((author) => author.name)}
          </View>
        </View>
      </View>
    </Container>
  )
}

export default Book
