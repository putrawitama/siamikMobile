
import React, { Component } from 'react';
import {
  View,
  WebView,
} from 'react-native';

import axios from 'axios'
import cio from 'cheerio-without-node-native'

import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Col, List, ListItem } from 'native-base'

export default class Home extends Component {

  constructor(){
    super()

  }

  getData(){
      axios.get("https://siamik.upnjatim.ac.id/").then((data) => {
        console.log(data.data);
      })
   }

   componentDidMount() {
       this.getData()
   }

  render() {
    return (
      <Content padder>
          <Card style={{backgroundColor: '#00CE9F'}}>
            <CardItem style={{backgroundColor: 'transparent'}}>
              <Grid>
                <Col style={{height: 200, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{textAlign:'center', color:'white', fontWeight:'bold'}}>Hi, Fathurrachman Saputro Wiratama</Text>
                  <Text style={{textAlign:'center', color:'white', fontWeight:'bold', marginTop:10}}>1434010005</Text>
                </Col>
              </Grid>
            </CardItem>
            <CardItem style={{backgroundColor: 'white'}}>
              <Grid style={{marginLeft:-15, marginRight:2}}>
                <Col>
                  <List>
                    <ListItem>
                      <Left>
                        <Text>Status</Text>
                      </Left>
                      <Right>
                        <Text style={{color: '#00CE9F'}}>Aktif</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text>IPK</Text>
                      </Left>
                      <Right>
                        <Text>3.58</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text>Semester</Text>
                      </Left>
                      <Right>
                        <Text>6</Text>
                      </Right>
                    </ListItem>
                  </List>
                </Col>
              </Grid>
            </CardItem>
          </Card>
        </Content>
    )
  }
}

module.export = Home;
