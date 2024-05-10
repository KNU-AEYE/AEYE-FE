import { styled } from "@mui/material";

const ThumbnailImage = styled("img")({
  cursor: "pointer",
  width: "100%",
  height: "100%",
  objectFit: "cover",
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
