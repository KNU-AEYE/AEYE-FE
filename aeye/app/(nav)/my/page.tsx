"use client";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Avatar, Tooltip, Typography } from "@mui/material";
import fetchWithInterception from "@/app/fetchWrapper";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  margin: theme.spacing(2),
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Add subtle shadow
  borderRadius: theme.shape.borderRadius * 2, // Add border radius
  transition: "transform 0.2s", // Add transition effect
  "&:hover": {
    transform: "scale(1.02)", // Scale up on hover
  },
}));

function generateStringAvatar(name: string) {
  return `${name?.split(" ")[0][0]}${name?.split(" ")[1][0]}`;
}

function ProfileAvatar() {
  const [member, setMember] = useState<Member>();

  useEffect(() => {
    fetchWithInterception("https://api.a-eye.live/member/detail", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => setMember(jsonData.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <Tooltip title="Update profile" placement="top-start">
        <Avatar
          alt="User member"
          src={member?.profileUri}
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "#f0f0f0", // Add background color
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Add subtle shadow
          }}
        >
          {generateStringAvatar(member?.name as string)}
        </Avatar>
      </Tooltip>
      <Typography variant="h5" component="h2" style={{ marginTop: "12px" }}>
        {member?.name}
      </Typography>
      <Typography style={{ color: "#666", marginBottom: "4px" }}>
        {member?.email}
      </Typography>
      <Typography style={{ color: "#666", marginBottom: "4px" }}>
        {member?.phone || "No phone number"}
      </Typography>
    </div>
  );
}

export default function MyPage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container justifyContent="center" spacing={4}>
        <Grid item xs={12} sm={8} md={6}>
          <ProfileAvatar />
          <StyledPaper>item 1</StyledPaper>
          <StyledPaper>item 2</StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
}
