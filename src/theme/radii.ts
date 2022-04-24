export enum Radii {
  form = 'form',
  card = 'card',
  mainContent = 'mainContent',
  sidebar = 'sidebar',
  full = 'full',
  modal = 'modal'
}

export type RadiusTypes = { [key in Radii]: string }

const radii: RadiusTypes = {
  form: '3px',
  card: '4px',
  mainContent: '5px',
  sidebar: '5px',
  full: '999px',
  modal: '12px'
}

export default radii
