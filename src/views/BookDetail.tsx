import { useParams } from 'react-router-dom'

import Grid from '../components/grid/Grid'
import Book from '../components/book/Book'

const BookDetail = () => {
  const { id } = useParams()

  return (
    <Grid gridTemplateColumns="1fr 1fr 1fr" gridGap="10px">
      {id ? <Book id={id} /> : null}
    </Grid>
  )
}

export default BookDetail
