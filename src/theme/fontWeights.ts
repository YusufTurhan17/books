export enum FontWeights {
  bold = 'bold',
  regular = 'regular',
  light = 'light'
}

export type FontWeightTypes = { [key in FontWeights]: number }

const fontWeights: FontWeightTypes = {
  bold: 700,
  regular: 400,
  light: 300
}

export default fontWeights
