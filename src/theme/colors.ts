export enum Colors {
  black = 'black',
  white = 'white',
  blue = 'blue',
  lightBlue = 'lightBlue',
  lightenBlue = 'lightenBlue',
  midBlue = 'midBlue',
  red = 'red',
  grey = 'grey',
  lightGrey = 'lightGrey',
  yellow = 'yellow',
  midGrey = 'midGrey',
  lightenGrey = 'lightenGrey',
  shadowColor = 'shadowColor',
  overlayColor = 'overlayColor',
  separatorColor = 'separatorColor',
  copyrightColor = 'copyrightColor'
}

export type ColorTypes = { [key in Colors]: string }

const colors: ColorTypes = {
  black: '#353637',
  white: '#ffffff',
  blue: '#064B8D',
  lightBlue: '#B3C8DC',
  lightenBlue: '#e6edf3',
  midBlue: '#5D81A3',
  red: '#D6313A',
  grey: '#EAEAEA',
  lightGrey: '#D8D8D8',
  yellow: '#f1d300',
  midGrey: '#656565',
  lightenGrey: '#F9F9F9',
  shadowColor: '#0000000D',
  overlayColor: 'rgba(6, 75, 141, 0.9)',
  separatorColor: '#E9E9E9',
  copyrightColor: 'rgba(255, 255, 255, 0.6)'
}

export default colors
