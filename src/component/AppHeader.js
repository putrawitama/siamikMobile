
import React, { Component } from 'react'
import {
  Text,
} from 'react-native'

import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base'

export default class AppHeader extends Component {

  
  render() {
    return (
      <Header>
        <Body>
          <Title>Siamik Mobile</Title>
        </Body>
      </Header>
    )
  }
}

module.export = AppHeader;
