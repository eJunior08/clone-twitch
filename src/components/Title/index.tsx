import React from 'react';
import { View } from 'react-native';

/* Styles */
import { Container } from './styles';

const Title: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Title;
