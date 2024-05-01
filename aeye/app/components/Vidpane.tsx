import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import { styled } from "@mui/material/styles";
import VideoInfos from "./VidInfos";

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

export default function Vidpane({ video }: { video: VideoDocument }) {
  const [showVideoInfo, setShowVideoInfo] = useState(false);
  const [startTime, setStartTime] = useState(0);

  const handleClick = () => {
    setShowVideoInfo(true);
  };

  const handleClose = () => {
    setShowVideoInfo(false);
  };

  const handleVideoLoaded = () => {
    if (startTime > 0) {
      const videoElement = document.getElementById(
        "videoPlayer"
      ) as HTMLVideoElement;
      if (videoElement) {
        videoElement.currentTime = startTime;
        setStartTime(0); // Reset start time after setting it
      }
    }
  };

  return (
    <div>
      <ThumbnailImage
        src={video.videoResponseDto.thumbnailUri}
        alt={video.videoResponseDto.title}
        onClick={handleClick}
      />
      <Backdrop
        open={showVideoInfo}
        onClick={handleClose}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <VideoContainer>
          <Video
            id="videoPlayer"
            controls
            onLoadedData={handleVideoLoaded}
            src={video.videoResponseDto.videoUri}
          />
          <VideoInfos video={video} />
        </VideoContainer>
      </Backdrop>
    </div>
  );
}
