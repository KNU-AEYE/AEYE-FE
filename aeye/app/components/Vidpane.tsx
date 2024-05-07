import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import VideoInfos from "./VidInfos";
import Skeleton from "@mui/material/Skeleton";
import {
  ThumbnailImage,
  Video,
  VideoContainer,
} from "@/app/components/styledVid";
import { Typography } from "@mui/material";

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

  const handleClick = () => {
    setShowVideoInfo(true);
  };

  const handleClose = () => {
    setShowVideoInfo(false);
  };

  const generateThumbnail = async (videoUrl: string, timeStamp: number) => {
    try {
      const video = document.createElement("video");
      video.crossOrigin = "anonymous";
      video.src = videoUrl;
      await video.load();
      await new Promise((resolve) => {
        video.addEventListener("loadeddata", resolve);
      });

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        video.currentTime = timeStamp;
        await new Promise((resolve) =>
          video.addEventListener("seeked", resolve)
        );
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const thumbnailSrc = canvas.toDataURL();
        setThumbnailSrc(thumbnailSrc);
      } else {
        throw new Error("Failed to create canvas context");
      }
    } catch (error) {
      console.error("Thumbnail generation failed:", error);
    }
  };

  useEffect(() => {
    const timeInSeconds = timeStringToSeconds(video.time);
    generateThumbnail(video.videoResponseDto.videoUri, timeInSeconds);
  }, []);

  return (
    <>
      {thumbnailSrc ? (
        <>
          <ThumbnailImage
            src={thumbnailSrc}
            alt={video.videoResponseDto.title}
            onClick={handleClick}
          />
          <Typography>{video.videoResponseDto.title}</Typography>
        </>
      ) : (
        <Skeleton variant="rectangular" animation="wave" />
      )}
      <Backdrop
        open={showVideoInfo}
        onClick={handleClose}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
      >
        <VideoContainer>
          <Video
            id="videoPlayer"
            controls
            src={video.videoResponseDto.videoUri}
          />
          <VideoInfos video={video} />
        </VideoContainer>
      </Backdrop>
    </>
  );
}
