import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const TopContainer = styled.View`
  height: 65%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["background-header"]};
  justify-content: center;
  padding-top: ${getStatusBarHeight()}px;
  padding-left: 50px;
  padding-right: 50px;
`;

export const BrandingContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BrandingImage = styled.Image`
  width: 60px;
  height: 60px;
  align-self: center;
  margin-bottom: 10px;
`;

export const Brand = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors["text-color-soft"]};
  text-align: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 34px;
  color: ${({ theme }) => theme.colors["text-color"]};
  margin-top: 50px;
  font-weight: 300;
  line-height: 40px;
`;

export const LoginMessage = styled.Text`
  margin-top: 50px;
  text-align: center;
  font-size: 20px;
  color: ${({ theme }) => theme.colors["white"]};
`;

export const AuthButtonsContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 30px 0;
  flex: 1;
`;
