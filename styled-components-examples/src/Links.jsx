import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const activeClassName = {
     fontWeight: 'bold',
     color: 'red'
}


const H2 = styled.h2`
  color: ${
    props => props.theme.fontColor
  };
`
// const activeClassName = 'font-weight: bold'

// const RouterLink = styled(NavLink).attrs({
//   activeClassName
// })`
//   color: white;
//   // When active
//   &.${activeClassName} {
//     color: palevioletred
//   }
// `

const RouterLink = styled(NavLink)`
  color: white;
  &:hover {
    color: green;
  }
`

const UL = styled.ul`
  color: green;
  text-align: left;
`

const LI = styled.li`
  color: purple;
  &:hover {
    color: green;
  }
`

const Links = () => {
  return (
    <UL>

      <LI><RouterLink to='/home'>Home</RouterLink></LI>
      <LI><RouterLink to='/getting-started'>Getting Started</RouterLink></LI>
      <LI><RouterLink to='/passed-props'>Passed Props</RouterLink></LI>
      <LI><RouterLink to='/adapting-based-on-props'>Adapting Based on Props</RouterLink></LI>
      <LI><RouterLink to='/styling-any-component'>Styling Any Component</RouterLink></LI>
      <LI><RouterLink to='/extending-styles'>Extending Styles</RouterLink></LI>
      <LI><RouterLink to='/attaching-additional-props'>Attaching Additional Props</RouterLink></LI>
      <LI><RouterLink to='/animations'>Animations</RouterLink></LI>
      <H2>Advanced</H2>
      <LI><RouterLink to='/theming'>Theming</RouterLink></LI>
      <LI><RouterLink to='/function-themes'>Function themes</RouterLink></LI>
      <LI><RouterLink to='/with-theme'>withTheme</RouterLink></LI>
      <LI><RouterLink to='/the-theme-prop'>The theme prop</RouterLink></LI>
      <LI><RouterLink to='/refs'>Refs</RouterLink></LI>
      <LI><RouterLink to='/security'>Security</RouterLink></LI>
      <LI><RouterLink to='/media-queries'>Media Queries</RouterLink></LI>
      <LI><RouterLink to='/attribs'>attribs</RouterLink></LI>
    </UL>
  )
}
export default Links