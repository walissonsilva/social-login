import styled from "styled-components/native";

export const SocialButton = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  align-self: center;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors["text-color-soft"]};
  width: 90%;

  margin: 10px 0;
`;

export const SocialButtonImageContainer = styled.View`
  align-items: center;
  border-right-color: #eee;
  border-right-width: 1px;
  padding: 10px 20px;
`;

export const SocialButtonImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const SocialButtonTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const SocialButtonText = styled.Text`
  font-size: 18px;
  color: #888;
  padding-right: 10px;
`;
