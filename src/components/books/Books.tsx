import { Link } from 'react-router-dom'

import { IBook } from '../../interfaces/IBook'

import useLocalState from '../../hooks/useLocalState'

import Button from '../button/Button'
import Card, { CardImage, CardContent } from '../card/Card'
import Grid from '../grid/Grid'
import Title from '../title/Title'
import Text from '../text/Text'

import { ReactComponent as StarFull } from '../../assets/icons/star-full.svg'
import { ReactComponent as StarEmpty } from '../../assets/icons/star-empty.svg'

interface BooksProps {
  books: Array<IBook>
}

const BookList = ({ books }: BooksProps) => {
  const [favoritesBookIds, setFavoritesBookIds] = useLocalState('books')

  const updatefavoriteBooks = (book: IBook) => {
    setFavoritesBookIds((currentFavoriteBookIdsRawData) => {
      const currentFavoriteBookIds = currentFavoriteBookIdsRawData
        .split(',')
        .filter(Boolean)

      const isIncludeBook = currentFavoriteBookIds.includes(String(book.id))
      if (isIncludeBook) {
        return currentFavoriteBookIds
          .filter((currentBookId) => currentBookId !== String(book.id))
          .join()
      }

      return [...currentFavoriteBookIds, book.id].join()
    })
  }

  return (
    <>
      <Grid
        display="grid"
        gridGap="30px"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr 1fr 1fr 1fr']}
      >
        {books?.map((book) => (
          <Card position="relative" key={book.id}>
            <Button
              variant="icon"
              position="absolute"
              right="5px"
              top="5px"
              color="yellow"
              onClick={() => updatefavoriteBooks(book)}
            >
              {favoritesBookIds?.split(',')?.includes(String(book.id)) ? (
                <StarFull />
              ) : (
                <StarEmpty />
              )}
            </Button>

            {book.formats['image/jpeg'] ? (
              <CardImage src={book.formats['image/jpeg']} />
            ) : null}
            <CardContent>
              <Title mb="10px" fontSize="15px">
                {book.title}
              </Title>
              <Text tagName="strong">Yazarlar:</Text>
              {book.authors.map((author) => author.name)}
            </CardContent>
            <Link to={`/books/${book.id}`}>Detay</Link>
          </Card>
        ))}
      </Grid>
    </>
  )
}

export default BookList
