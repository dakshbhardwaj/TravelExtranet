import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {ListItem, List, Card, Left, Body} from 'native-base';
export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Provider',
  };

  constructor(props) {
    super(props);
    this.state = {
      booking: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      loading: true,
    };
  }

  componentDidMount() {
    var self = this;
    var data = JSON.stringify({
      providerID: '1111',
      loginID: 'test',
      password: 'test',
    });

    var config = {
      method: 'get',
      url: 'https://everest-beta-2.herokuapp.com//provider',
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'postman-token': '5e851be0-f808-91bf-a9f8-4a0bbd9ff136',
        token:
          '@St.P0AjO2VyNHQyMyE-P3F3JDV0dkFkZXJmNkc=.-xpCYdw8on1JVi69VZdZ4bEh8zFJoNbH.pO7qtToHd3hWjAAHWt_b15HYYDulzl4inh_CkrsRaNymhJsCBLDqBsQ9fX2AZ2HrYmazq9YTZNyLvGDG-s939_2iaoBeoM3zO9bAYo9dWV_U68G1J4ntupimPFrzv9e7-VEcPjun5naEHoE4w1yzTCPin0Twqw61Dp1RiOfpQRRMaV2T5Fu-VXdQysfHuBNPTKmdzvCIhwSAcSkZtuUA28AeSG9rJJLX_UQmpWbewGHbWvvu-mE2_jrQtqOaBB9yz4hWjCacEB0kKWKpIxzEXoE4EuzGRfDjbFk=',
      },
      data: data,
    };

    axios(config)
      .then(function(response) {
        console.log(JSON.stringify(response.data));
        self.setState({
          booking: response.data,
          loading: false,
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  renderItem = item => {
    return (
      <Card>
        <List>
          <ListItem>
            <Left>
              <Text>Provider Name</Text>
            </Left>
            <Body>
              <Text>{item.provider_name}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Provider Id</Text>
            </Left>
            <Body>
              <Text>{item.provider_id}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Type</Text>
            </Left>
            <Body>
              <Text>{item.type}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Currency</Text>
            </Left>
            <Body>
              <Text>{item.currency}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Left>
              <Text>Updated</Text>
            </Left>
            <Body>
              <Text>{item.updated}</Text>
            </Body>
          </ListItem>
        </List>
      </Card>
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          animating={this.state.loading}
          color="red"
        />
        <FlatList
          data={this.state.booking}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
