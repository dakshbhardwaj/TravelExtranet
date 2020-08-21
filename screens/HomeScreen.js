import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';

const HomeScreen = ({navigation}) => {
  const {colors} = useTheme();

  const theme = useTheme();

  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Text style={{color: colors.text}}>Home Screen</Text>
      <Image
        source={{
          uri:
            'https://cdn.pixabay.com/photo/2016/08/26/22/45/chain-1623322_960_720.jpg',
        }}
        style={{width: 200, height: 200}}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
