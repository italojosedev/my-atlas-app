import styled from 'styled-components/native';

export const Container = styled.View({
  flexDirection: 'row',
  padding: 10,
});

export const WrapperLeft = styled.View({
  marginRight: 10,
});

export const WrapperRight = styled.View({
  paddingRight: 10,
  flex: 1,
});

export const WrapperTop = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const WrapperName = styled.View({});

export const WrapperContent = styled.View({});

export const WrapperBottom = styled.View({});

export const WrapperOptions = styled.View({
  flexDirection: 'row',
});

export const ButtonOption = styled.TouchableOpacity({
  marginLeft: 10,
});
