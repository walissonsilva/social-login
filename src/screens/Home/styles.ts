import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  height: 220px;
  width: 100%;
  padding: 20px 20px 40px;
  background-color: ${({ theme }) => theme.colors["background-header"]};

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderLeft = styled.View``;

export const Title = styled.Text`
  font-size: 30px;
  color: ${({ theme }) => theme.colors["text-color"]};
  font-weight: 600;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors["text-color-soft"]};
  font-size: 16px;
  margin-top: 8px;
`;

export const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 2px solid #ffffff33;
`;
