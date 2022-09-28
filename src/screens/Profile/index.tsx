import React from "react";
import { useAuth } from "../../hooks/useAuth";

import * as S from "./styles";

export function Profile() {
  const { signOut } = useAuth();

  return (
    <S.Container>
      <S.Button onPress={signOut}>
        <S.ButtonText>Logout</S.ButtonText>
      </S.Button>
    </S.Container>
  );
}
