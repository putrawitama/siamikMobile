
import React, { Component } from 'react';
import {
  View
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base'

export default class AppFooter extends Component {

  constructor() {
    super();
    this.state = {
      activeTabName: 'home'
    };
  }

  tabAction(tab) {
    this.setState({activeTabName: tab});
     if (tab === 'home') {
      Actions.home();
    } else if (tab === 'schedule') {
      Actions.schedule();
    } else if (tab === 'score') {
      Actions.score();
    } else {
      Actions.absent();
    }
  }

  render() {
    return (
      <Footer>
          <FooterTab>
            <Button vertical active={(this.state.activeTabName === "home")? true: ""}
                             onPress={() => {this.tabAction('home')}}>
              <Icon active={(this.state.activeTabName === "home")? true: ""} name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical active={(this.state.activeTabName === "schedule")? true: ""}
                             onPress={() => {this.tabAction('schedule')}}>
              <Icon active={(this.state.activeTabName === "schedule")? true: ""} name="list" />
              <Text>Jadwal</Text>
            </Button>
            <Button vertical active={(this.state.activeTabName === "score")? true: ""}
                             onPress={() => {this.tabAction('score')}}>
              <Icon active={(this.state.activeTabName === "score")? true: ""} name="paper" />
              <Text>Nilai</Text>
            </Button>
            <Button vertical active={(this.state.activeTabName === "absent")? true: ""}
                             onPress={() => {this.tabAction('absent')}}>
              <Icon active={(this.state.activeTabName === "absent")? true: ""} name="checkmark" />
              <Text>Absensi</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}

module.export = AppFooter;
