import React from 'react';
import styled from 'styled-components'
import { log } from '../ke-utils'

const App = () => {
  const Link = ({ className, children }) => {
    log('className', className)
    return (
      <a className={className}>
        {children}
      </a>
    )
  }

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  return (
    <div>
      <Link>Unstyled, boring Link</Link><br />
      <StyledLink>Styled, exciting Link</StyledLink>

    </div>
  );
}

export default App;
