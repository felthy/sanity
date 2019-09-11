import React from 'react'
import ReferenceInput from '../../inputs/ReferenceInput'
import {search, getPreviewSnapshot} from './client-adapters/reference'

export default class SanityReference extends React.Component {
  setInput = input => {
    this._input = input
  }

  focus() {
    this._input.focus()
  }

  render() {
    return (
      <ReferenceInput
        {...this.props}
        onSearch={search}
        getPreviewSnapshot={getPreviewSnapshot}
        ref={this.setInput}
      />
    )
  }
}
