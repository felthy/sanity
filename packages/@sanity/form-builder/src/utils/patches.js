
export function setIfMissing(
  value,
  /*: any*/
  /*: Path*/
  path = []
) {
  /*: SetIfMissingPatch*/
  return {
    type: 'setIfMissing',
    path,
    value
  }
}
export function insert(
  items,
  /*: any[]*/
  position,
  /*: InsertPosition*/
  /*: Path*/
  path = []
) {
  /*: InsertPatch*/
  return {
    type: 'insert',
    path,
    position,
    items
  }
}
export function set(
  value,
  /*: any*/
  /*: Path*/
  path = []
) {
  /*: SetPatch*/
  return {
    type: 'set',
    path,
    value
  }
}
export function unset(
  /*: Path*/
  path = []
) {
  /*: UnsetPatch*/
  return {
    type: 'unset',
    path
  }
}
export function inc(
  amount = 1,
  /*: Path*/
  path = []
) {
  /*: IncPatch*/
  return {
    type: 'inc',
    path,
    value: amount
  }
}
export function dec(
  amount = 1,
  /*: Path*/
  path = []
) {
  /*: DecPatch*/
  return {
    type: 'dec',
    path,
    value: amount
  }
}
export function prefixPath(
  /*:: <T: HasPath>*/
  patch,
  /*: T*/
  segment
  /*: PathSegment*/
) {
  /*: T*/
  return {...patch, path: [segment, ...patch.path]}
}
