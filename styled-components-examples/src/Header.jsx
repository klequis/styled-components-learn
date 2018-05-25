import React from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg';
import Nav from './Nav'


const Wrapper = styled.header`
  background-color: #222;
  padding: 20px;
  color: white;
`
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`
const Logo = styled.img`
  animation: ${ spin } infinite 20s linear;
  height: 80px;
`

const StyledComponents = styled.a`
  color: white;
  > :hover {
    color: orange;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Header = (props) => {
  return (
    <Wrapper className="App-header">
      <Logo src={logo} className="App-logo" alt="logo" />
      <Title className="App-title"><StyledComponents href='https://www.styled-components.com/docs'> style-components</StyledComponents> Examples</Title>
      <p>This project contains most if not all examples from the styled-components documentation.</p>
      <p>Examples by styled-components team</p>
      <p>Reproduced by klequis - TriValley Coders</p>
      <Nav handleThemeClick={props.handleThemeClick} />
    </Wrapper>
  )
}
export default Header