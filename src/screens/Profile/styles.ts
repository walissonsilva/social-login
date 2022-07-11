import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Button = styled.TouchableOpacity`
  padding: 12px 20px;
  background-color: ${({ theme }) => theme.colors["background-header"]};
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ theme }) => theme.colors["white"]};
`;
