"use client";

import { useState } from "react";
import { useRecoilValue } from "recoil";
import { memberState } from "@/app/recoil-states";
import { Alert, Box, Grid } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";
import ProfileMenu from "./profileMenu";

function AddPhoneNumberInfo() {
  const [close, setClose] = useState(false);
  const profile = useRecoilValue(memberState);
  return (
    !profile?.phone &&
    !close && (
      <Alert severity="warning" onClose={() => setClose(true)}>
        알림톡 기능을 위해 전화번호를 추가해주세요.
      </Alert>
    )
  );
}

export default function MyPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={8} md={6}>
          <AddPhoneNumberInfo />
          <ProfileAvatar />
          <ProfileMenu />
        </Grid>
      </Grid>
    </Box>
  );
}
