import React, {Component} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {
  List,
  ListItem,
  Text,
  Container,
  Left,
  Body,
  Content,
  Card,
} from 'native-base';
export default class BookmarkScreen extends Component {
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

  static navigationOptions = {
    title: 'Booking',
  };

  componentDidMount() {
    var self = this;
    var data = JSON.stringify({
      providerID: '1111',
      loginID: 'test',
      password: 'test',
    });

    var config = {
      method: 'get',
      url: ' https://everest-beta-2.herokuapp.com//booking',
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

  renderItem = (item, index) => {
    return (
      <Card key={index}>
        <List key={index}>
          <ListItem key={index}>
            <Left>
              <Text>Booking Number</Text>
            </Left>
            <Body>
              <Text>{item.booking_number}</Text>
            </Body>
          </ListItem>
          <ListItem key={index}>
            <Left>
              <Text>Reservation Number </Text>
            </Left>

            <Body>
              <Text>{item.reservation_number}</Text>
            </Body>
          </ListItem>
          <ListItem key={index}>
            <Left>
              <Text>Display Name</Text>
            </Left>

            <Body>
              <Text>{item.display_name}</Text>
            </Body>
          </ListItem>
          <ListItem key={index}>
            <Left>
              <Text>Reserved Date</Text>
            </Left>

            <Body>
              <Text>{item.reserved_date}</Text>
            </Body>
          </ListItem>
          <ListItem key={index}>
            <Left>
              <Text>Canceled Date</Text>
            </Left>

            <Body>
              <Text>{item.canceled_date}</Text>
            </Body>
          </ListItem>
          {
            // <ListItem>
            //   <Left>
            //     <Text>Traveling Period</Text>
            //   </Left>
            //             <Body>
            //               <Text>{item.traveling_period}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Room Type</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.room_type}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Plan Name</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.plan_name}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Guest Name</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.guest_name}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Contact</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.contact}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Guest Count</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.guest_count}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Total Price</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.total_price}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem>
            //             <Left>
            //               <Text>Payment Method</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.payment_method}</Text>
            //             </Body>
            //           </ListItem>
            //           <ListItem itemDivider={false} noIndent={true}>
            //             <Left>
            //               <Text>Status</Text>
            //             </Left>
            //             <Body>
            //               <Text>{item.status}</Text>
            //             </Body>
            //           </ListItem>
            //
          }
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
