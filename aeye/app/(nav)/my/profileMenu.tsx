import { useState } from "react";
import { useRecoilValue } from "recoil";
import { memberState } from "@/app/recoil-states";
import {
  Paper,
  Divider,
  Button,
  Typography,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import fetchWithInterception from "@/app/fetchWrapper";
import KakaoIcon from "@/app/kakao";
import GoogleIcon from "@/app/google";

export default function ProfileMenu() {
  const member = useRecoilValue(memberState);
  const [phone, setPhone] = useState("");

  const handleClick = async () => {
    fetchWithInterception("https://api.a-eye.live/member/phone", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    })
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.code == 204) {
          alert("전화번호가 변경되었습니다.");
          location.reload();
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Paper
          elevation={3}
          sx={{
            padding: "20px",
            width: "100%",
            height: "13vh",
          }}
        >
          <Typography variant="h6">계정 연결 정보</Typography>
          <Divider sx={{ mb: "28px" }} />
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            {member?.socialLogin === "GOOGLE" ? <GoogleIcon /> : <KakaoIcon />}
            {member?.socialLogin}
          </Typography>
        </Paper>
        <Paper
          elevation={3}
          sx={{ padding: "20px", width: "100%", height: "17vh" }}
        >
          <Typography variant="h6">전화번호 설정</Typography>
          <Divider />
          <Box mt={2}>
            <TextField
              label="New Phone Number"
              variant="outlined"
              size="small"
              fullWidth
              autoFocus
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Box>
          <Box
            mt={2}
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <Button variant="contained" color="primary" onClick={handleClick}>
              Update
            </Button>
          </Box>
        </Paper>
      </Stack>
    </Box>
  );
}
