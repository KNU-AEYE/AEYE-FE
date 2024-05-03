import { useState, useRef, useEffect } from "react";
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

function timeStringToSeconds(timeString: string) {
  const timeParts = timeString.split(":").map(Number);
  let hours = 0,
    minutes = 0,
    seconds = 0;

  if (timeParts.length === 2) {
    // Format: mm:ss
    minutes = timeParts[0];
    seconds = timeParts[1];
  } else if (timeParts.length === 3) {
    // Format: hh:mm:ss
    hours = timeParts[0];
    minutes = timeParts[1];
    seconds = timeParts[2];
  } else {
    throw new Error("Invalid time string format");
  }

  return hours * 3600 + minutes * 60 + seconds;
}

export default function Vidpane({ video }: { video: VideoDocument }) {
  const [showVideoInfo, setShowVideoInfo] = useState(false);
  const [thumbnailSrc, setThumbnailSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    setShowVideoInfo(true);
  };

  const handleClose = () => {
    setShowVideoInfo(false);
  };

  const generateThumbnail = async (timeStamp: number) => {
    const video = videoRef.current;
    if (video) {
      video.crossOrigin = "anonymous";
      video.pause();
      video.currentTime = timeStamp;
      await new Promise((resolve) => video.addEventListener("seeked", resolve));
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailSrc = canvas.toDataURL();
        setThumbnailSrc(thumbnailSrc);
      }
    }
  };

  useEffect(() => {
    const timeInSeconds = timeStringToSeconds(video.time);
    generateThumbnail(timeInSeconds);
  }, []);

  return (
    <div>
      {thumbnailSrc && (
        <ThumbnailImage
          src={thumbnailSrc}
          alt={video.videoResponseDto.title}
          onClick={handleClick}
        />
      )}
      <Backdrop
        open={showVideoInfo}
        onClick={handleClose}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <VideoContainer>
          <Video
            ref={videoRef}
            id="videoPlayer"
            controls
            src={video.videoResponseDto.videoUri}
          />
          <VideoInfos video={video} />
        </VideoContainer>
      </Backdrop>
    </div>
  );
}
