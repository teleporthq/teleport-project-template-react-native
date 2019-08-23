import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ImageSource = require('../assets/random.jpg');

const AboutScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const Image = styled.Image``;

const AboutScreen = props => {
  return (
    <AboutScreenContainer>
      <Image source={ImageSource} />
      <Text>ABOUT SCREEN</Text>
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate('Home')}>
        <Text>Go To Home</Text>
      </TouchableWithoutFeedback>
    </AboutScreenContainer>
  );
};

export default AboutScreen;
