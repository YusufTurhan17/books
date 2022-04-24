export enum FontSizes {
  base = 'base',
  sm = 'sm',
  title = 'title',
  subTitle = 'subTitle',
  footerTitle = 'footerTitle',
  input = 'input',
  textarea = 'textarea',
  accordionContent = 'accordionContent',
  footerLink = 'footerLink',
  link = 'link',
  copyright = 'copyright'
}

export type FontSizeTypes = { [key in FontSizes]: string }

const fontSizes: FontSizeTypes = {
  base: '1em',
  sm: '0.875em',
  title: '3.0em',
  subTitle: '1.25em',
  footerTitle: '0.875em',
  input: '1em',
  textarea: '0.875em',
  accordionContent: '0.750em',
  footerLink: '0.750em',
  link: '1em',
  copyright: '0.625em'
}

export default fontSizes
