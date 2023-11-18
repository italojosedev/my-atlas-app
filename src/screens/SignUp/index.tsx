import {Button, Text, TextInput} from 'react-native-paper';
import {Container, Form, FormInput} from './styles';
import {useState} from 'react';
import {StackNavigation} from '../../routes/auth.routes';
import {useNavigation} from '@react-navigation/native';

export default function SignUpScreen() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  const {navigate} = useNavigation<StackNavigation>();
  function changeForm(key: string, form: string): void {}
  return (
    <Container>
      <Text variant="displayMedium">Cadrasto</Text>
      <Form>
        <FormInput>
          <TextInput
            mode="outlined"
            label="Email"
            placeholder="seuemail@mail.com"
            // right={<TextInput.Affix text="/500" />}
          />
        </FormInput>
        <FormInput>
          <TextInput
            mode="outlined"
            label="Senha"
            placeholder="****"
            // right={<TextInput.Affix text="/500" />}
          />
        </FormInput>
        <FormInput>
          <Button
            mode="contained"
            onPress={() => console.log('Pressed')}
            loading={false}>
            Cadastrar-se
          </Button>
        </FormInput>
        <FormInput>
          <Button
            mode="text"
            textColor="black"
            onPress={() => navigate('SignIn')}
            loading={false}
            compact={true}>
            Login
          </Button>
        </FormInput>
      </Form>
    </Container>
  );
}
