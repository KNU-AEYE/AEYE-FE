"use client";
import { useEffect, useState } from "react";
import fetchWithInterception from "@/app/fetchWrapper";
import { Grid } from "@mui/material";

export default function Cams() {
  const [videos, setVideos] = useState<VideoResponseDto[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetchWithInterception(
          `https://api.a-eye.live/video?page=${page}&size=12`,
          {
            method: "GET",
          }
        );
        const jsonData = await response.json();
        setVideos((prevVideos) => [...prevVideos, ...jsonData.data.videos]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchVideos();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <video
            id={`videoPlayer_${index}`}
            autoPlay
            muted
            src={video.videoUri}
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
