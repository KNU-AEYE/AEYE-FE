"use client";
import { useState } from "react";
import fetchWithInterception from "@/app/fetchWrapper";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Button, Box } from "@mui/material";

export default function GenerateButton() {
  const [showAlert, setShowAlert] = useState(false);

  const sendRequest = () => {
    fetchWithInterception("https://api.a-eye.live/email", { method: "POST" })
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.code === 200) {
          setShowAlert(true);
          setTimeout(() => {
            setShowAlert(false);
          }, 2000); // Hide alert after 1 second
        }
        console.log(jsonData);
      });
  };

  return (
    <>
      {showAlert && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          sx={{ marginTop: "5px" }}
        >
          이메일이 성공적으로 전송되었습니다.
        </Alert>
      )}
      <Box display="flex" justifyContent="flex-end" mb={2} mt={2}>
        <Button variant="contained" onClick={sendRequest}>
          생성하기
        </Button>
      </Box>
    </>
  );
}
