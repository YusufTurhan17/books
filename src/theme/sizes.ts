export enum Sizes {
  cardWidth = 'cardWidth',
  cardHeaderHeight = 'cardHeaderHeight',
  cardContentHeight = 'cardContentHeight',
  containerWidth = 'containerWidth',
  containerEsignature = 'containerEsignature',
  sidebarWidth = 'sidebarWidth'
}

export type SizeTypes = { [key in Sizes]: string }

const sizes: SizeTypes = {
  cardWidth: '11.500em',
  cardHeaderHeight: '12.188em',
  cardContentHeight: '3.438em',
  containerWidth: '40.000em',
  containerEsignature: '76.250em',
  sidebarWidth: '14.375em'
}

export default sizes
