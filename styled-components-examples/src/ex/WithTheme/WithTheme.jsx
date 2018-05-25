import React from 'react';
import styled, { withTheme } from 'styled-components'
import { log } from '../../ke-utils'

const WithTheme = (props) => {

  return (
    <div>
      <h2>WithTheme</h2>
    </div>
  )
}

export default withTheme(WithTheme)
