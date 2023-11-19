import {Text} from 'react-native-paper';

import {Container, ScrollPost, WrapperTitle} from './styles';
import Post from '../../components/Post';

export default function HomeScreen() {
  return (
    <>
      <Container>
        <WrapperTitle>
          <Text variant="titleLarge">ATLAS</Text>
        </WrapperTitle>
        <ScrollPost>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </ScrollPost>
      </Container>
    </>
  );
}
