export enum Fonts {
  Roboto = 'Roboto',
  RobotoCondensed = 'RobotoCondensed',
  Arial = 'Arial'
}

export type FontTypes = { [key in Fonts]: string }

const fonts: FontTypes = {
  Roboto: 'Roboto',
  RobotoCondensed: 'Roboto Condensed',
  Arial: 'Arial, Helvetica, sans-serif'
}

export default fonts
