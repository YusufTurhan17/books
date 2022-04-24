export interface IAuthor {
  name: string
  birth_year: number
  death_year: number
}

export interface IFormat {
  'image/jpeg': string
}

export interface IBook {
  id: number
  title: string
  authors: Array<IAuthor>
  languages: Array<string>
  subjects: Array<string>
  formats: IFormat
}

export type BookLocal = Record<number, IBook>

export interface IBooks {
  count: number
  next: string
  previous: string
  results: Array<IBook>
}
