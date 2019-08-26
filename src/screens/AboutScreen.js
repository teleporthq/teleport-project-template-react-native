import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const ImageSource = require('../assets/random.jpg');

const AboutScreenContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const ImageContainer = styled.View`
  box-shadow: 10px 5px 5px black;
`;

const GoToButton = styled.TouchableOpacity``;
const Image = styled.Image``;

const AboutScreen = props => {
  return (
    <AboutScreenContainer>
      <ImageContainer>
        <Image source={ImageSource} />
      </ImageContainer>
      <Text>ABOUT SCREEN</Text>
      <GoToButton onPress={() => props.navigation.navigate('Home')}>
        <Text>Go To Home</Text>
      </GoToButton>
    </AboutScreenContainer>
  );
};

export default AboutScreen;
