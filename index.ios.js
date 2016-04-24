/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  AppRegistry,
  Component,
  TabBarIOS
} from 'react-native';

import Welcome from './welcome.ios';
import More from './more.ios';

class devdecticTab extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedTab: 'welcome'
    };
  }

  render() {
    return(
      <TabBarIOS selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item 
          selected={this.state.selectedTab === 'welcome'}
          systemIcon="featured"
          onPress={() => {
            this.setState({
              selectedTab: 'welcome'
            });
          }}>
          <Welcome />
          </TabBarIOS.Item>
          
          <TabBarIOS.Item 
          selected={this.state.selectedTab === 'more'}
          systemIcon="contacts"
          onPress={() => {
            this.setState({
              selectedTab: 'more'
            });
          }}>
          <More />
          </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}


AppRegistry.registerComponent('devdecticTab', () => devdecticTab);
