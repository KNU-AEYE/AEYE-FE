"use client";

import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Avatar, Tooltip, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: theme.spacing(1),
}));

function stringAvatar(name: string | undefined) {
  return {
    children: `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`,
  };
}

function ProfileAvatar() {
  const [member, setMember] = useState<Member | null>(null);

  const fetchMember = async () => {
    try {
      const res = await fetch("https://api.a-eye.live/member/detail", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        const jsonData = await res.json();
        setMember(jsonData.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMember();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Tooltip title="Update profile" placement="top-start">
        {member?.profileUri ? (
          <Avatar
            alt="User member"
            src={member?.profileUri}
            sx={{ width: 56, height: 56 }}
          />
        ) : (
          <Avatar {...stringAvatar(member?.name)} />
        )}
      </Tooltip>
      <Typography variant="h5" component="h2" style={{ marginTop: "8px" }}>
        {member?.name}
      </Typography>
      <Typography style={{ color: "gray" }}>
        {member?.email} {member?.phone}
      </Typography>
    </div>
  );
}

export default function MyPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={4}>
        <Grid item container direction="column">
          <ProfileAvatar />
          <Grid item>
            <Item>itme1</Item>
          </Grid>
          <Grid item>
            <Item>item2</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
