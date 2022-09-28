import React from "react";
import { useAuth } from "../../hooks/useAuth";

import * as S from "./styles";

export function Home() {
  const { userInfo } = useAuth();

  const firstName = userInfo.name ? userInfo.name.split(" ")[0] : "";

  return (
    <S.Container>
      <S.Header>
        <S.HeaderLeft>
          <S.Title>Hello, {firstName}!</S.Title>
          <S.Subtitle>Welcome to Your Tasks!</S.Subtitle>
        </S.HeaderLeft>

        <S.ProfileImageContainer>
          <S.ProfileImage
            source={{
              uri: userInfo.profileImage,
            }}
          />
        </S.ProfileImageContainer>
      </S.Header>
    </S.Container>
  );
}
