import React from 'react';
import styled from 'styled-components'
import { log } from '../ke-utils'

// Modified this one from the doc sample as the focus rectangle was no
// showing on the dark background so added the &:focus ...
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &:focus {
    background-color: orange;
  }
`

class Form extends React.Component {
  render() {
    return (
      <Input
        placeholder="Hover here..."
        innerRef={x => { this.input = x }}
        onMouseEnter={() => {
          console.log('mouse-enter')
          this.input.focus()
        }}
      />
    );
  }
}

const Refs = () => {


  return (
    <div>
      <Form />
    </div>
  );
}

export default Refs;
