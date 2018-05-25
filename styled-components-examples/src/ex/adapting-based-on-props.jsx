import React from 'react';
import styled from 'styled-components'
import { log } from '../ke-utils'

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const App = () => {
  return (
    <div>
      <Button>Normal</Button>
      <Button primary>Primary</Button>

    </div>
  );
}

export default App;
