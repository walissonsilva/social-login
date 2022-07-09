import React from "react";
import { Text } from "react-native";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <S.HeaderLeft>
          <S.Title>Hello, Walisson!</S.Title>
          <S.Subtitle>Welcome to Your Tasks!</S.Subtitle>
        </S.HeaderLeft>

        <S.ProfileImageContainer>
          <S.ProfileImage
            source={{
              uri: "https://avatars.githubusercontent.com/u/13500056?v=4",
            }}
          />
        </S.ProfileImageContainer>
      </S.Header>
    </S.Container>
  );
}
