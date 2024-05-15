"use client";
import { styled } from "@mui/material/styles";
import { Box, Grid, Paper, Avatar, Tooltip, Typography } from "@mui/material";
import ProfileAvatar from "./ProfileAvatar";

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
