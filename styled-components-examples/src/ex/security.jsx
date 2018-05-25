import React from 'react';
import styled from 'styled-components'
import H2 from '../H2'
import A from '../A'
import { log } from '../ke-utils'

const Security = () => {


  return (
    <div>
      <H2>Security</H2>
      <p>The documentation recommends using <A href="https://github.com/mathiasbynens/CSS.escape">polyfill by Mathias Brnens</A> to protect against CSS injection.</p>
      <p>There is a standard emerging named <A href="https://github.com/mathiasbynens/CSS.escape">CSS.escape</A> </p>
    </div>
  );
}

export default Security;
