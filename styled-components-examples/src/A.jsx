import React from 'react'
import styled from 'styled-components'

const AComp = styled.a`
  color: white;
`

const A = ({ href, children }) => {
  return (
    <AComp href={href} >{children}</AComp>
  )
}
export default A