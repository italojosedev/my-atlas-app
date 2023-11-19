import {Avatar, Button, Divider, Text} from 'react-native-paper';
import {
  Container,
  WrapperTop,
  WrapperTopLeft,
  WrapperTopRight,
  WrapperEdit,
  Wrappertitle,
  Scroll,
} from './styles';
import Post from '../../components/Post';

export default function MyProfile() {
  return (
    <>
      <Container>
        <Scroll>
          <WrapperTop>
            <WrapperTopLeft>
              <Text variant="headlineMedium">Meu nome</Text>
              <Text variant="bodyMedium">Biografia</Text>
            </WrapperTopLeft>
            <WrapperTopRight>
              <Avatar.Image
                size={74}
                source={{
                  uri: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                }}
              />
            </WrapperTopRight>
          </WrapperTop>
          <WrapperEdit>
            <Button mode="outlined" onPress={() => {}}>
              Editar Perfil
            </Button>
          </WrapperEdit>
          <Divider />
          <Wrappertitle>
            <Text variant="bodyLarge">Posts</Text>
          </Wrappertitle>
          <Post />
          <Post />
          <Post />
          <Post />
        </Scroll>
      </Container>
    </>
  );
}
