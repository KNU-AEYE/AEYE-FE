import { styled } from "@mui/material";

const ThumbnailImage = styled("img")({
  cursor: "pointer",
  maxWidth: "100%",
  maxHeight: "100%",
});

const VideoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "80%",
  height: "80%",
  position: "relative",
});

const Video = styled("video")({
  flex: "1",
  maxWidth: "60%",
  maxHeight: "60%",
});

export { ThumbnailImage, VideoContainer, Video };
