import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 36px;
  font-weight: 600;
  color: ${(props) => props.theme.colors["primary-color"]};
`;

export const Subtitle = styled.Text`
  color: ${(props) => props.theme.colors["text-color-soft"]};
  font-size: 18px;
  max-width: 75%;
  text-align: center;
  margin-top: 10px;
`;

export const ThemeButton = styled.TouchableOpacity`
  margin: 20px 0;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors["primary-color"]};
  border-radius: 5px;
`;

export const DefaultText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
`;
