
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

// import axios from 'axios'
// import cio from 'cheerio-without-node-native'

import { Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Grid, Col, List, ListItem } from 'native-base'

export default class Score extends Component {

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
      <Content padder>
          <Card>
            <CardItem>
              <Grid style={{marginLeft:-15, marginRight:2}}>
                <Col>
                  <List>
                    <ListItem>
                      <Left>
                        <Text>MANAJEMEN PROYEK IT</Text>
                      </Left>
                      <Right>
                        <Text>A</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text>DATA MINING</Text>
                      </Left>
                      <Right>
                        <Text>A</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text>PEMROGRAMAN GAME</Text>
                      </Left>
                      <Right>
                        <Text>A</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text>ARSITEKTUR TEKNOLOGI INFORMASI</Text>
                      </Left>
                      <Right>
                        <Text>A</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text>KEAMANAN JARINGAN</Text>
                      </Left>
                      <Right>
                        <Text>A</Text>
                      </Right>
                    </ListItem>
                    <ListItem>
                      <Left>
                        <Text style={{fontWeight:'bold'}}>IPS</Text>
                      </Left>
                      <Right>
                        <Text style={{fontWeight:'bold'}}>4.00</Text>
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

module.export = Score;
