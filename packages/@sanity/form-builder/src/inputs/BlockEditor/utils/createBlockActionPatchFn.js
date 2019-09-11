

/*:: import type {FormBuilderValue, Block} from '../typeDefs'*/
import {normalizeBlock} from '@sanity/block-tools'
import PatchEvent, {insert, unset, set} from '../../../PatchEvent'

export default function createBlockActionPatchFn(
  type,
  /*: string*/
  block,
  /*: FormBuilderValue*/
  onPatch
  /*: PatchEvent => void*/
) {
  let toInsert
  return (
    givenBlock
    /*: Block*/
  ) => {
    switch (type) {
      case 'set':
        return onPatch(
          PatchEvent.from(
            set(normalizeBlock(givenBlock), [
              {
                _key: block._key
              }
            ])
          )
        )

      case 'unset':
        return onPatch(
          PatchEvent.from(
            unset([
              {
                _key: block._key
              }
            ])
          )
        )

      case 'insert':
        toInsert = Array.isArray(givenBlock) ? givenBlock : [givenBlock]
        toInsert = toInsert.map(blk => normalizeBlock(blk))
        return onPatch(
          PatchEvent.from(
            insert(toInsert, 'after', [
              {
                _key: block._key
              }
            ])
          )
        )

      default:
        throw new Error(`Patch type ${type} not supported`)
    }
  }
}
