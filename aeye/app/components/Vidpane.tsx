import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import { styled } from "@mui/material/styles";

const ThumbnailImage = styled("img")({
  cursor: "pointer",
});

const VideoContainer = styled("div")({
  width: "100%",
  height: "100%",
  position: "relative",
});

const Video = styled("video")({
  width: "100%",
  height: "100%",
});

const VideoInfo = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
});

export default function Vidpane({ video }: { video: VideoDocument }) {
  const [showVideoInfo, setShowVideoInfo] = useState(false);
  const handleClick = () => {
    setShowVideoInfo(true);
  };

  const handleClose = () => {
    setShowVideoInfo(false);
  };
  return (
    <div>
      <ThumbnailImage
        src={video.videoResponseDto.thumbnailUri}
        alt={video.videoResponseDto.title}
        onClick={handleClick}
      />
      <Backdrop open={showVideoInfo} onClick={handleClose}>
        <VideoContainer>
          <Video controls>
            <source src={video.videoResponseDto.videoUri} type="video/mp4" />
            Your browser does not support the video tag.
          </Video>
          <VideoInfo>
            <p>{video.videoResponseDto.title}</p>
            <p>{video.videoResponseDto.content}</p>
            {/* Add other video information here */}
          </VideoInfo>
        </VideoContainer>
      </Backdrop>
    </div>
  );
}
