import {useState} from 'react';
import {Button, Divider, Text, TextInput} from 'react-native-paper';
import {
  Container,
  WrapperTop,
  WrapperTopLeft,
  ButtonCancel,
  WrapperTopRight,
  WrapperText,
  Wrappercount,
} from './styles';
import IconClose from '../../components/Icons/Close';
import {useNavigation} from '@react-navigation/native';

export default function NewPost() {
  const {goBack} = useNavigation();
  const [text, setText] = useState('');
  return (
    <>
      <Container>
        <WrapperTop>
          <WrapperTopLeft>
            <ButtonCancel onPress={() => goBack()}>
              <IconClose />
            </ButtonCancel>
            <Text variant="titleMedium">Novo Post</Text>
          </WrapperTopLeft>
          <WrapperTopRight>
            <Button>Postar</Button>
          </WrapperTopRight>
        </WrapperTop>
        <Divider />
        <WrapperText>
          <TextInput
            mode="outlined"
            label="Escrevea aqui"
            value={text}
            onChangeText={text => setText(text)}
            multiline
            numberOfLines={5}
          />
          <Wrappercount>
            <Text>{text.length}/250</Text>
          </Wrappercount>
        </WrapperText>
      </Container>
    </>
  );
}
