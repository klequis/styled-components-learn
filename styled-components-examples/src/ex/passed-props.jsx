import React from 'react';
import styled from 'styled-components'
import { log } from '../ke-utils'

const App = () => {

  // Create an Input component that'll render an <input> tag with some styles
  const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;


  return (
    <div>
      <Input placeholder="@mxstbr" type="text" />
      <Input value="@geelen" type="text" />
  </div>
  );
}

export default App;
