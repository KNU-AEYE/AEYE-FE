"use client";
import { useState, useEffect } from "react";
import { Avatar, Typography, Tooltip } from "@mui/material";
import fetchWithInterception from "@/app/fetchWrapper";

export default function ProfileAvatar() {
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    fetchWithInterception("https://api.a-eye.live/member/detail", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => setMember(jsonData.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    member && (
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
            src={member.profileUri}
            sx={{
              width: 100,
              height: 100,
              backgroundColor: "#f0f0f0", // Add background color
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)", // Add subtle shadow
            }}
          />
        </Tooltip>
        <Typography variant="h5" component="h2" style={{ marginTop: "12px" }}>
          {member.name}
        </Typography>
        <Typography style={{ color: "#666", marginBottom: "4px" }}>
          {member.email}
        </Typography>
        <Typography style={{ color: "#666", marginBottom: "4px" }}>
          {member.phone || "No phone number"}
        </Typography>
      </div>
    )
  );
}
