import { SocialLoginButton } from "../../components/SocialLoginButton";
import * as S from "./styles";

export function SignIn() {
  return (
    <S.Container>
      <S.TopContainer>
        <S.BrandingContainer>
          <S.BrandingImage
            source={{
              uri: "https://icons.iconarchive.com/icons/cornmanthe3rd/squareplex/512/Utilities-tasks-icon.png",
            }}
          />
          <S.Brand>YourTasks</S.Brand>
        </S.BrandingContainer>

        <S.Title>Organize suas tarefas diárias de uma forma simples</S.Title>
      </S.TopContainer>

      <S.AuthButtonsContainer>
        <SocialLoginButton
          image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          text="Login com o GitHub"
          provider="github"
        />

        <SocialLoginButton
          image="https://imagepng.org/wp-content/uploads/2019/08/google-icon-2.png"
          text="Login com o Google"
          provider="google"
        />
      </S.AuthButtonsContainer>
    </S.Container>
  );
}
