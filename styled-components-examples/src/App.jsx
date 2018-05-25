import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router , Route } from 'react-router-dom'
import Header from './Header'
import Links from './Links'
import Home from './Home'
import GettingStartd from './ex/getting-started'
import PassedProps from './ex/passed-props'
import AdaptingBasedOnProps from './ex/adapting-based-on-props'
import StyleAnyComponent from './ex/style-any-component'
import ExtendingStyles from './ex/extending-styles'
import AttachingAdditionalProps from './ex/attaching-additional-props'
// import Animations from './ex/animations'
import Theming from './ex/theming'
import FunctionThemes from './ex/function-themes'
import WithTheme from './ex/WithTheme'
import { blue, green } from './colors'
import TheThemeProp from './ex/the-theme-prop'
import Refs from './ex/refs'
import Security from './ex/security'
import MediaQueries from './ex/media-queries'
import Attribs from './ex/attribs'

const blueTheme = {
  fontColor: blue,
  backgroundColor: blue,
}

const greenTheme = {
  fontColor: green,
  backgroundColor: green,
}

const AppWrapper = styled.div`
  text-align: center;
`

const BodyWrapper = styled.div`
  display: flex;
  align-content: stretch;
`
const LeftSide = styled.div`
  flex-basis: 30%;
`
const RightSide = styled.div`
  flex-basis: 70%;
`
/*
  https://codesandbox.io/s/00woyw8r0
  OR
  withComponent(Link).extend
*/


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: blueTheme,
    };
  }

  handleThemeClick = () => {
    this.setState((prevState, props) => {
      return {theme: prevState.theme === blueTheme ? greenTheme : blueTheme };
    });
  }

  render() {

    return (
      <AppWrapper className="App">
        <ThemeProvider theme={this.state.theme} >
        <div>
        <h1>WOW</h1>

        <Header handleThemeClick={this.handleThemeClick} />
        <hr />
        <Router>
          <BodyWrapper>
            <LeftSide>
              <Links />
            </LeftSide>

            <RightSide>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/getting-started' component={GettingStartd} />
              <Route path='/passed-props' component={PassedProps} />
              <Route path='/adapting-based-on-props' component={AdaptingBasedOnProps} />
              <Route path='/styling-any-component' component={StyleAnyComponent} />
              <Route path='/extending-styles' component={ExtendingStyles} />
              <Route path='/attaching-additional-props' component={AttachingAdditionalProps} />
              {/* <Route path='/animations' component={Animations} /> */}
              <Route path='/theming' component={Theming} />
              <Route path='/function-themes' component={FunctionThemes} />
              <Route path='/with-theme' component={WithTheme} />
              <Route path='/the-theme-prop' component={TheThemeProp} />
              <Route path='/refs' component={Refs} />
              <Route path='/security' component={Security} />
              <Route path='/media-queries' component={MediaQueries} />
              <Route path='/attribs' component={Attribs} />
            </RightSide>
          </BodyWrapper>
        </Router>
        </div>
        </ThemeProvider>
      </AppWrapper>
    )
  }
}

export default App;
