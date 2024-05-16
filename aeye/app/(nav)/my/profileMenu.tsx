import { useState } from "react";
import { useRecoilState } from "recoil";
import { memberState } from "@/app/recoil-states";
import {
  Paper,
  Divider,
  Button,
  Typography,
  TextField,
  Box,
} from "@mui/material";
import fetchWithInterception from "@/app/fetchWrapper";
import KakaoIcon from "@/app/kakao";
import GoogleIcon from "@/app/google";

export default function ProfileMenu() {
  const [member, setMember] = useRecoilState(memberState);
  const [phone, setPhone] = useState("");

  const handleClick = async () => {
    fetchWithInterception("https://api.a-eye.live/member/phone", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone }),
    }).catch((error) => console.error(error));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper
        elevation={3}
        sx={{ padding: "20px", marginBottom: "20px", width: "100%" }}
      >
        <Typography variant="h6">Account Linking Information</Typography>
        <Divider />
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {member?.socialLogin}
          {member?.socialLogin === "GOOGLE" ? <GoogleIcon /> : <KakaoIcon />}
        </Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: "20px", width: "100%" }}>
        <Typography variant="h6">Update Phone Number </Typography>
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
    </Box>
  );
}
