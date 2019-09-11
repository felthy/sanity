import React from 'react'
import {ImageInput} from '../..'
import resolveUploader from '../uploads/resolveUploader'
import {materializeReference} from './client-adapters/assets'

export default class SanityImageInput extends React.Component {
  focus() {
    if (this._input) {
      this._input.focus()
    }
  }

  setInput = input => {
    this._input = input
  }

  render() {
    return (
      <ImageInput
        {...this.props}
        resolveUploader={resolveUploader}
        materialize={materializeReference}
        ref={this.setInput}
      />
    )
  }
}
