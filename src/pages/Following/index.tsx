import React from 'react';
import { Text } from 'react-native';

/* Components */
import Header from '../../components/Header';

/* Styles */
import { Container, Wrapper, Main } from './styles';

const Following: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </Wrapper>
  );
};

export default Following;
