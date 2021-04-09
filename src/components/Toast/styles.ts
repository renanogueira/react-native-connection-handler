import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const AnimatedView = styled(Animated.View)`
  width: 90%;
  align-self: center;
  position: absolute;
  bottom: 0;
  background-color: red;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  flex-direction: row;
  border-radius: 8px;
`;

export const Text = styled.Text`
  color: white;
  font-size: 14px;
  flex: 1;
  padding-right: 20px;
`;
