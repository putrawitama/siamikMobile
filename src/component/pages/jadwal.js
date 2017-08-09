
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

// import axios from 'axios'
// import cio from 'cheerio-without-node-native'

import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

export default class Schedule extends Component {

  // constructor(){
  //   super()
  //   this.state = {
  //     test : []
  //   }
  // }
  //
  // getData(){
  //     axios.get("https://siamik.upnjatim.ac.id/").then((data) => {
  //       this.setState({test : data.data})
  //     })
  //  }
  //
  //  componentDidMount() {
  //      this.getData();
  //  }

  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Algoritma pemrograman</Text>
                <Text note>Ruang 305</Text>
              </Body>
            </Left>
            <Right>
              <Text note>Senin</Text>
              <Text note>07:00</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Pemrograman Game</Text>
                <Text note>Ruang 301</Text>
              </Body>
            </Left>
            <Right>
              <Text note>Selasa</Text>
              <Text note>10:00</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Arsitektur TI</Text>
                <Text note>Ruang 304</Text>
              </Body>
            </Left>
            <Right>
              <Text note>Jumat</Text>
              <Text note>13:00</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Manajemen Proyek TI</Text>
                <Text note>Ruang 201</Text>
              </Body>
            </Left>
            <Right>
              <Text note>Rabu</Text>
              <Text note>09:30</Text>
            </Right>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>Data Mining</Text>
                <Text note>Ruang 201</Text>
              </Body>
            </Left>
            <Right>
              <Text note>Kamis</Text>
              <Text note>12:00</Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

module.export = Schedule;
