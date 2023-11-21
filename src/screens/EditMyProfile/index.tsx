import {Avatar, Button, Divider, Text, TextInput} from 'react-native-paper';
import {
  Container,
  WrapperTop,
  WrapperTopLeft,
  WrapperTopRight,
  WrapperEdit,
  WrapperInput,
  Wrappertitle,
  Scroll,
  ContainerEdit,
} from './styles';
import Post from '../../components/Post';
import {useNavigation} from '@react-navigation/native';

export default function MyProfile() {
  const {goBack} = useNavigation();
  function handleSave() {
    goBack();
  }
  return (
    <>
      <Container>
        <WrapperTop></WrapperTop>
        <ContainerEdit>
          <WrapperEdit>
            <WrapperTopLeft>
              <WrapperInput>
                <TextInput mode="flat" label="Nome" />
              </WrapperInput>
            </WrapperTopLeft>
            <WrapperTopRight>
              <Avatar.Image
                size={74}
                source={{
                  uri: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
                }}
              />
            </WrapperTopRight>
          </WrapperEdit>
          <WrapperInput>
            <TextInput
              mode="flat"
              label="Biografia"
              multiline
              numberOfLines={4}
            />
          </WrapperInput>
          <Button
            onPress={() => {
              handleSave();
            }}
            mode="contained-tonal">
            Salvar
          </Button>
        </ContainerEdit>
      </Container>
    </>
  );
}
