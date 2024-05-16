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

export default function ProfileMenu() {
  const [member, setMember] = useRecoilState(memberState);

  const handleClick = async () => {
    const newPhoneNumber = prompt("Enter your new phone number:");
    if (newPhoneNumber) {
      const response = await fetchWithInterception("/api/member/phone", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: newPhoneNumber }),
      });
      if (response.ok) {
        //setMember({ ...member, phone: newPhoneNumber });
        alert("Phone number updated successfully!");
      } else {
        alert("Failed to update phone number. Please try again.");
      }
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Paper
        elevation={3}
        sx={{ padding: "20px", marginBottom: "20px", width: "100%" }}
      >
        <Typography variant="h6">Account Linking Information</Typography>
        <Divider />
        <Typography variant="body1">{member?.socialLogin}</Typography>
      </Paper>
      <Paper elevation={3} sx={{ padding: "20px", width: "100%" }}>
        <Typography variant="h6">Update Phone Number</Typography>
        <Divider />
        <Box mt={2}>
          <TextField
            label="New Phone Number"
            variant="outlined"
            size="small"
            fullWidth
            autoFocus
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
