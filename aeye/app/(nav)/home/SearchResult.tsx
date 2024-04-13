"use client";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/app/recoil-states";
import { useEffect, useState } from "react";
import Vidpane from "@/app/components/Vidpane";
import { Grid, Paper } from "@mui/material";

function Vidgroup({ videos }: { videos: VideoDocument[] }) {
  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper style={{ padding: 10, background: "#f0f0f0" }}>
            <Vidpane video={video} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

export default function SearchResult() {
  const searchQuery = useRecoilValue(searchQueryState);
  const [results, setResults] = useState<Vidarr>();
  const fetchResults = async () => {
    const res = await fetch(
      `https://api.a-eye.live/video/search?keyword=${searchQuery}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (res.ok) {
      const jsonData = await res.json();
      console.log(jsonData.data);
      setResults(jsonData.data);
    }
  };
  useEffect(() => {
    fetchResults();
  }, []);

  return <>{results && <Vidgroup videos={results.videoDocuments} />}</>;
}
