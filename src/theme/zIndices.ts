export enum Zindices {
  overlay,
  openedSelect,
  closedSelect,
  toggleMenu
}

export type ZIndexTypes = Zindices[]

const zIndices: ZIndexTypes = [
  Zindices.closedSelect,
  Zindices.openedSelect,
  Zindices.overlay,
  Zindices.toggleMenu
]

export default zIndices
