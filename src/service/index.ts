import axios from 'axios'

import { IBooks, IBook } from '../interfaces/IBook'

const booksApi = axios.create({
  baseURL: 'https://gutendex.com/'
})

export const fetchBooks = async (
  page: number,
  keyword: string
): Promise<IBooks> => {
  const response = await booksApi.get('books', {
    params: {
      page,
      search: keyword
    }
  })

  return response.data
}

export const fetchBookIds = async (
  page: number,
  keyword: string,
  ids: string
): Promise<IBooks> => {
  const response = await booksApi.get('books', {
    params: {
      page,
      ids,
      search: keyword
    }
  })

  return response.data
}

export const fetchBook = async (id: string): Promise<IBook> => {
  const response = await booksApi.get(`books/${id}`)

  return response.data
}

export default booksApi
