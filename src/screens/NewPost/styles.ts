import styled from 'styled-components/native';

export const Container = styled.View({
  marginTop: 40,
  flex: 1,
  padding: 10,
});

export const WrapperTop = styled.View({
  flexDirection: 'row',
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 16,
  paddingBottom: 24,
});

export const WrapperTopLeft = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
});

export const WrapperTopRight = styled.View({});

export const Wrappercount = styled.View({
  marginTop: 5,
  alignItems: 'flex-end',
});

export const WrapperText = styled.View({
  marginTop: 16,
  marginbottom: 16,
});

export const ButtonCancel = styled.TouchableOpacity({
  marginRight: 10,
});

export const TextInput = styled.TextInput({
  width: '100%',
  height: 300,
  border: '1px solid #0004',
  borderRadius: 16,
  textAlignLast: 'start',
});
