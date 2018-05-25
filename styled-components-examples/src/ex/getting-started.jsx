import React from 'react';
import styled from 'styled-components'
import { log } from '../ke-utils'

const App = () => {
  // Create a Title component that'll render an <h1> tag with some styles
   const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <div>
    // Use Title and Wrapper like any other React component – except they're styled!
    <Wrapper>
      <Title>
        Hello World, this is my first styled component!
      </Title>
    </Wrapper>

    </div>
  )
}

export default App;
