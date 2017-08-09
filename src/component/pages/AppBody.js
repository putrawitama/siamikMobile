
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import axios from 'axios'
import cio from 'cheerio-without-node-native'

import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

export default class AppBody extends Component {

  constructor(){
    super()
    this.state = {
      test : []
    }
  }

  getData(){
      axios.get("https://siamik.upnjatim.ac.id/").then((data) => {
        this.setState({test : data.data})
      })
   }

   componentDidMount() {
       this.getData();
   }

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{this.state.test[0]('.txt3').text()}</Text>
                <Text note>Ruang 305</Text>
              </Body>
            </Left>
            <Right>
              <Text note>Senin</Text>
              <Text note>07:00</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

module.export = AppBody;
