import React from 'react';
import { FlatList, Text, View } from 'react-native';

/* Components */
import CategoryList from '../../components/CategoryList';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

/* Styles */
import { Container, Wrapper, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indexArr } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PADE_HEADER',
        render: () => <Heading>Following</Heading>,
      },
      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {
        key: 'C1',
        render: () => <CategoryList />,
        isTitle: true,
      },
      /* LIVE_CHANNELS */
      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C2',
        render: () => <View />,
        isTitle: true,
      },
      /* CONTINUE_WATCHING */
      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {
        key: 'C3',
        render: () => <View />,
        isTitle: true,
      },
      /* OFFLINE_CHANNELS */
      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },
      {
        key: 'C4',
        render: () => <View />,
        isTitle: true,
      },
    ];

    // Array que contém apenas os indices dos elementos que são títulos
    const indexArr: number[] = [];

    items.forEach((item, index) => item.isTitle && indexArr.push(index));

    return {
      data: items,
      indexArr,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indexArr}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
