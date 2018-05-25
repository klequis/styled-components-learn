import React from 'react'
import styled from 'styled-components'

const H2Comp = styled.h2`
  color: ${
    props => props.theme.fontColor
  };
`

const H2 = ({ children }) => {
  return (
    <H2Comp>{children}</H2Comp>
  )
}
export default H2