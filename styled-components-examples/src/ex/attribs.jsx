import React from 'react';
import styled from 'styled-components'
import { log } from '../ke-utils'

const Input = styled.input.attrs({
  type: 'text',
  size: props => props.small ? 3 : 8,
  food: 'none', // just a dummy attrib to see it work
})`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  padding: ${props => props.padding};
`

const Attribs = () => {

  return (
    <div>
      <Input  />
    </div>
  );
}

export default Attribs;
