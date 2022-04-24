export enum Spaces {
  rowGap = 'rowGap',
  columnGap = 'columnGap',
  mainPadding = 'mainPadding',
  label = 'label',
  headerPadding = 'headerPadding',
  sidebarPadding = 'sidebarPadding',
  footerPadding = 'footerPadding',
  jumbotronPadding = 'jumbotronPadding'
}

export type SpaceTypes = { [key in Spaces]: string }

const space: SpaceTypes = {
  rowGap: '1.625em',
  columnGap: '1.250em',
  mainPadding: '0px 5.000em',
  label: '1.063em',
  headerPadding: '1.250em 1.563em',
  sidebarPadding: '1.563em',
  jumbotronPadding: '0 0 2.250em',
  footerPadding: '1.563em 4.000em 1.125em 4.000em'
}

export default space
