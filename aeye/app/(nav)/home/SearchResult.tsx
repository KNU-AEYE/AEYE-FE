"use client";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/app/recoil-states";
import { useEffect, useState } from "react";
import Vidpane from "@/app/components/Vidpane";
import { Grid, Paper, Typography } from "@mui/material";
import fetchWithInterception from "@/app/fetchWrapper";

const FETCH_TIMEOUT = 200;

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

  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;

    const fetchResults = () => {
      fetchWithInterception(
        `https://api.a-eye.live/video/search?keyword=${searchQuery}`,
        { method: "GET" }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((jsonData) => setResults(jsonData.data))
        .catch((error) => console.error(error));
    };

    if (searchQuery) {
      searchTimeout = setTimeout(fetchResults, FETCH_TIMEOUT);
    }

    return () => clearTimeout(searchTimeout);
  }, [searchQuery]);

  return (
    <>
      {results && results.videoDocuments.length > 0 ? (
        <Vidgroup videos={results.videoDocuments} />
      ) : (
        <Typography
          variant="h6"
          align="center"
          color={"textSecondary"}
          style={{ marginTop: 20 }}
        >
          No results found
        </Typography>
      )}
    </>
  );
}
