import React, { Component } from 'react';
import styled, { css } from 'styled-components'

const mainColor = 'indianred'

const Title = styled.h1`
  color: ${props => props.color ||  'goldenrod'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  flex-grow: 1;
  width: 300px;
  height: 250px;
  padding: 5px;
  margin: 15px;

  ${props => {
    if (props.showBorder) {
      console.log('** props **')
      return `
        border: 1px solid ${mainColor};
        border-radius: 8px;
      `
    }

  }}
`;

const DarkRect = styled.div`
  ${props => {
    return `
      color: ${props.color};
    `
  }}
`

class App extends Component {
  render() {

    const thumbnails = Array.from({ length: 5 }, (_, index) => {
      const showBorder = index % 2 === 0;
      return <Thumbnail key={index + 1} src={require(`../assets/thumbnail-${index + 1}.jpeg`)} showBorder={showBorder} />;
    })

    // const thumbnails = Array.from({ length: 5 }, (_, index) => {
    //   return <Thumbnail key={index + 1} src={require(`../assets/thumbnail-${index + 1}.jpeg`)} />;
    // });
    return (
      <div className={this.props.className}>
        <DarkRect color='blue'>
          Blue
        </DarkRect>
        <Title color={mainColor}>Mystagram</Title>
        <Gallery>
          {thumbnails}
        </Gallery>
      </div>
    );
  }
}

export default styled(App)`
  width: 100vw;
  height: 100vh;
  text-align: center;
`
