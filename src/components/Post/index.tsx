import {useState} from 'react';
import {Button, Divider, Menu, Text} from 'react-native-paper';

import {Avatar} from 'react-native-paper';

import {
  Container,
  WrapperLeft,
  WrapperRight,
  WrapperTop,
  WrapperBottom,
  WrapperName,
  WrapperContent,
  WrapperOptions,
  ButtonOption,
} from './styles';
import {IconTreeDots} from '../Icons';

export default function Post() {
  const [visible, setVisible] = useState(false);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <>
      <Container>
        <WrapperLeft>
          <Avatar.Image
            size={50}
            source={{
              uri: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
            }}
          />
        </WrapperLeft>
        <WrapperRight>
          <WrapperTop>
            <WrapperName>
              <Text variant="titleMedium">zuck</Text>
            </WrapperName>
            <WrapperOptions>
              <Text variant="labelSmall">49 m</Text>
              <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                  <ButtonOption onPress={openMenu}>
                    <IconTreeDots />
                  </ButtonOption>
                }>
                <Menu.Item onPress={() => {}} title="Item 1" />
                <Menu.Item onPress={() => {}} title="Item 2" />
                <Divider />
                <Menu.Item onPress={() => {}} title="Excluir" />
              </Menu>
            </WrapperOptions>
          </WrapperTop>
          <WrapperBottom>
            <WrapperContent>
              <Text variant="bodyMedium">
                Failures are stepping stones to success. Embrace them, learn
                from them, and keep moving forward
              </Text>
            </WrapperContent>
          </WrapperBottom>
        </WrapperRight>
      </Container>
    </>
  );
}
