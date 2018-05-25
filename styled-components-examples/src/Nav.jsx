import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${
    props => {
      return props.theme.backgroundColor
    }
  };
  padding: 15px 0;
`
const Button = styled.button`
  color: ${props => props.theme.fontColor};
  font-weight: bold;
  margin: 0 15px;
`

const Nav = ({ handleThemeClick, theme }) => {
  return (
    <Wrapper>
      <Button onClick={handleThemeClick} >Toggle Theme</Button>
    </Wrapper>
  )
}

export default Nav