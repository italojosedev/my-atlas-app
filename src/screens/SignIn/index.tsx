import {Button, Text, TextInput} from 'react-native-paper';
import {Container, Form, FormInput} from './styles';
import {useState} from 'react';

export default function SignInScreen() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });
  function changeForm(key: string, form: string): void {}
  return (
    <Container>
      <Text variant="displayMedium">Login</Text>
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
            Login
          </Button>
        </FormInput>
        <FormInput>
          <Button
            mode="text"
            textColor="black"
            onPress={() => console.log('Pressed')}
            loading={false}
            compact={true}>
            Cadastrar-se
          </Button>
        </FormInput>
      </Form>
    </Container>
  );
}
