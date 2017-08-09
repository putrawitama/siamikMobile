/* @flow */
import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native'

import { Container, StyleProvider } from 'native-base'

import AppHeader from './src/component/AppHeader'
import AppFooter from './src/component/AppFooter'
import getTheme from './src/themes/components';
import siamikMobile from './src/themes/variables/siamikMobile'

import Home from './src/component/pages/home'
import Absent from './src/component/pages/absen'
import Schedule from './src/component/pages/jadwal'
import Score from './src/component/pages/nilai'

import {Router, Scene} from 'react-native-router-flux';

export default class SiamikMobile extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(siamikMobile)}>
      <Container>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} title="Home" hideNavBar={true}/>
            <Scene key="schedule" component={Schedule} title="Schedule" hideNavBar={false}/>
            <Scene key="score" component={Score} title="Score" hideNavBar={false}/>
            <Scene key="absent" component={Absent} title="Absent" hideNavBar={false}/>
          </Scene>
        </Router>
        <AppFooter/>
      </Container>
      </StyleProvider >
    )
  }
}

AppRegistry.registerComponent('SiamikMobile' ,() => SiamikMobile)
