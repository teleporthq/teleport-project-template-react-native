import React from 'react';
import {View, Text} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const HomeScreen = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HOME PAGE</Text>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('About')}>
        <Text>Go To About</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default HomeScreen;
