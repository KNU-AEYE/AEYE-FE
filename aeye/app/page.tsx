"use client";
import { Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useEffect } from "react";
import GoogleIcon from "@/app/google";
import KakaoIcon from "@/app/kakao";

const RootContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
});

const ButtonContainer = styled("div")({
  display: "flex",
  gap: "16px",
});

const CustomTypography = styled(Typography)({
  fontWeight: "bold",
  fontStyle: "italic",
  color: "#fff",
  textAlign: "center",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Adding shadow for more notability
  fontSize: "8rem",
});

function GoogleLoginButton() {
  const handleLoginWithGoogle = async () => {
    window.location.replace(
      `https://api.a-eye.live/oauth2/authorization/google`
    );
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      onClick={handleLoginWithGoogle}
      startIcon={<GoogleIcon />}
      color="secondary"
      size="small"
    >
      Sign in with Google
    </Button>
  );
}

function KakaoLoginButton() {
  const handleLoginWithKakao = async () => {
    window.location.replace(
      `https://api.a-eye.live/oauth2/authorization/kakao`
    );
  };

  return (
    <Button
      fullWidth
      variant="outlined"
      onClick={handleLoginWithKakao}
      startIcon={<KakaoIcon />}
      color="secondary"
      size="small"
    >
      Sign in with Kakao
    </Button>
  );
}

export default function Landing() {
  useEffect(() => {
    document.body.style.background =
      "linear-gradient(135deg, #65d586 0%, #e0e0e0 100%)";
  }, []);
  return (
    <RootContainer>
      <CustomTypography variant="h1">AEYE</CustomTypography>
      <Typography variant="overline" color="white" mb="15px" gutterBottom>
        the smart survaillence system
      </Typography>
      <ButtonContainer>
        <GoogleLoginButton />
        <KakaoLoginButton />
      </ButtonContainer>
    </RootContainer>
  );
}
