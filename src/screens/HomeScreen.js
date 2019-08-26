import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ImageSource = require('../assets/random.jpg');

const HomeScreen = props => {
  return (
    <View style={style.container}>
      <Text>HOME PAGE</Text>
      <View style={style.imageContainer}>
        <Image source={ImageSource} />
      </View>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('About')}>
        <Text>Go To About</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'black',
    shadowOpacity: 1.0,
    marginBottom: 20,
  },
});

export default HomeScreen;
