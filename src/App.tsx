import { Routes, Route } from 'react-router-dom'

import Books from './views/Books'
import BookDetail from './views/BookDetail'
import FavoriteBooks from './views/FavoriteBooks'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookDetail />} />
      <Route path="/favorite-books" element={<FavoriteBooks />} />
    </Routes>
  )
}

export default App
