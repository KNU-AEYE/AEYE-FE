"use client";

import { SpeedDial, SpeedDialAction } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import { useEffect, useState } from "react";
import fetchWithInterception from "@/app/fetchWrapper";

export default function OnlineUserSpeedDial() {
  const [users, setUsers] = useState<MemberOnline[]>([]);

  useEffect(() => {
    fetchWithInterception("https://api.a-eye.live/member/online", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => setUsers(jsonData.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SpeedDial
      ariaLabel="SpeedDial example"
      color="primary"
      sx={{ position: "absolute", bottom: "3vw", right: "5vh" }}
      icon={<PeopleIcon />}
    >
      {users.map((user, index) => (
        <SpeedDialAction
          key={index}
          icon={user.profileUri}
          tooltipTitle={user.name}
          onClick={() => console.log(user)}
        />
      ))}
    </SpeedDial>
  );
}
