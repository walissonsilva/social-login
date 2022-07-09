import * as S from "./styles";

interface SocialLoginButtonProps {
  image: string;
  text: string;
}

export function SocialLoginButton({ image, text }: SocialLoginButtonProps) {
  return (
    <S.SocialButton>
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
