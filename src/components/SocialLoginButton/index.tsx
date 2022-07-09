import { useAuth } from "../../hooks/useAuth";
import { SocialLoginProvider } from "../../utils/providers";
import * as S from "./styles";

interface SocialLoginButtonProps {
  image: string;
  text: string;
  provider: SocialLoginProvider;
}

export function SocialLoginButton({
  image,
  text,
  provider,
}: SocialLoginButtonProps) {
  const { signIn } = useAuth();

  return (
    <S.SocialButton onPress={() => signIn(provider)}>
      <S.SocialButtonImageContainer>
        <S.SocialButtonImage
          source={{
            uri: image,
          }}
        />
      </S.SocialButtonImageContainer>

      <S.SocialButtonTextContainer>
        <S.SocialButtonText>{text}</S.SocialButtonText>
      </S.SocialButtonTextContainer>
    </S.SocialButton>
  );
}
