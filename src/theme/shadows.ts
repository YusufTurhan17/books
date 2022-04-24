export enum Shadows {
  mainContent = 'mainContent',
  sidebar = 'sidebar',
  modal = 'modal',
  formField = 'formField'
}

export type ShadowTypes = { [key in Shadows]: string }

const shadows: ShadowTypes = {
  mainContent: '0px 16px 55px rgba(0, 0, 0, 0.15)',
  sidebar: '0px 16px 55px rgba(0, 0, 0, 0.15)',
  modal: '0px 8px 16px rgba(0, 0, 0, 0.16)',
  formField: '0px 8px 16px rgba(0, 0, 0, 0.16)'
}

export default shadows
