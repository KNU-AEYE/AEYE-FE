"use client";

import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { memberState } from "@/app/recoil-states";
import { Alert, Box, Grid, Switch, FormControlLabel } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";
import ProfileMenu from "./profileMenu";
import fetchWithInterception from "@/app/fetchWrapper";

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

function SubscriptionSwitch() {
  const profile = useRecoilValue(memberState);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(
    profile?.subscribeDailyReport || false
  );

  useEffect(() => {
    if (profile) {
      setIsSubscribed(profile.subscribeDailyReport);
    }
  }, [profile]);

  const handleToggle = () => {
    setIsSubscribed(!isSubscribed);
    fetchWithInterception("https://api.a-eye.live/member/subscribe", {
      method: "PUT",
    });
  };
  return (
    <FormControlLabel
      control={
        <Switch
          checked={isSubscribed}
          onChange={handleToggle}
          disabled={!profile}
        />
      }
      label="관제 일지 구독"
    />
  );
}

export default function MyPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={8} md={6}>
          <AddPhoneNumberInfo />
          <ProfileAvatar />
          <SubscriptionSwitch />
          <ProfileMenu />
        </Grid>
      </Grid>
    </Box>
  );
}
