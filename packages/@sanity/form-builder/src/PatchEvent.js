

/*:: import type {PathSegment, Patch} from './utils/patches'*/
import {flatten} from 'lodash'
import {prefixPath, set, unset, setIfMissing, insert, inc, dec} from './utils/patches'
/*:: type PatchArg = Patch | Array<Patch>*/

export default class PatchEvent {
  static from(...patches) {
    return new PatchEvent(flatten(patches))
  }
  /*:: patches: Array<Patch>*/

  constructor(
    patches
    /*: Array<Patch>*/
  ) {
    this.patches = patches
  }

  prepend(...patches /*: PatchEvent*/) {
    return PatchEvent.from([...flatten(patches), ...this.patches])
  }

  append(...patches /*: PatchEvent*/) {
    return PatchEvent.from([...this.patches, ...flatten(patches)])
  }

  prefixAll(
    segment /*: PatchEvent*/
    /*: PathSegment*/
  ) {
    return PatchEvent.from(this.patches.map(patch => prefixPath(patch, segment)))
  }
}
export {PatchEvent, set, unset, setIfMissing, insert, inc, dec}
