import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const VideoInfo = styled(Paper)({
  flex: "0 0 30%",
  padding: "20px",
  color: "black",
  background: "#f0f0f0",
  borderRadius: "10px",
  marginLeft: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.7)",
});

export default function VideoInfos({ video }: { video: VideoDocument }) {
  return (
    <VideoInfo>
      <Typography variant="h5" gutterBottom>
        {video.videoResponseDto.title}
      </Typography>
      <Typography
        variant="body2"
        display="block"
        sx={{ color: "red" }}
        gutterBottom
      >
        {video.time}
      </Typography>
      <Divider variant="middle" />
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        {video.content}
      </Typography>
    </VideoInfo>
  );
}
