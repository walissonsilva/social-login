import { useEffect } from "react";
import { SocialLoginButton } from "../../components/SocialLoginButton";
import { useAuth } from "../../hooks/useAuth";
import * as S from "./styles";

export function SignIn() {
  const { loadUserInfoFromStorage } = useAuth();

  useEffect(() => {
    loadUserInfoFromStorage();
  }, []);

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

        <S.Title>
          Plan and execute your daily tasks in a simple and efficient way
        </S.Title>
      </S.TopContainer>

      <S.AuthButtonsContainer>
        <SocialLoginButton
          image="https://imagepng.org/wp-content/uploads/2019/08/google-icon-2.png"
          text="Continue with Google"
          provider="google"
        />

        <SocialLoginButton
          image="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          text="Continue with GitHub"
          provider="github"
        />
      </S.AuthButtonsContainer>
    </S.Container>
  );
}
