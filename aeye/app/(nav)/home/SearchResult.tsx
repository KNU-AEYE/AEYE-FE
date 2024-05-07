import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/app/recoil-states";
import fetchWithInterception from "@/app/fetchWrapper";
import Vidpane from "@/app/components/Vidpane";
import { Grid, Paper, Typography, Pagination, Container } from "@mui/material";

const FETCH_TIMEOUT = 200;
const PAGE_SIZE = 12;

function Vidgroup({ videos }: { videos: VideoDocument[] }) {
  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper sx={{ padding: 10, bgcolor: "#f0f0f0" }}>
            <Vidpane video={video} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

function NoResultTypography() {
  return (
    <Typography
      variant="h6"
      align="center"
      color="textSecondary"
      style={{ marginTop: 20 }}
    >
      No results found
    </Typography>
  );
}

const SearchResult: React.FC = () => {
  const searchQuery = useRecoilValue(searchQueryState);
  const [results, setResults] = useState<Vidarr | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;

    const fetchResults = () => {
      fetchWithInterception(
        `https://api.a-eye.live/video/search?keyword=${searchQuery}&page=${currentPage}&size=${PAGE_SIZE}`,
        { method: "GET" }
      )
        .then((response) => response.json())
        .then((jsonData) => setResults(jsonData.data))
        .catch((error) => console.error(error));
    };

    if (searchQuery) {
      searchTimeout = setTimeout(fetchResults, FETCH_TIMEOUT);
    }
    return () => clearTimeout(searchTimeout);
  }, [searchQuery, currentPage]);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  return (
    <>
      {results && results.videoDocuments.length > 0 ? (
        <Container
          sx={{
            display: "grid",
            placeItems: "center",
            gap: "20px",
          }}
        >
          <Vidgroup videos={results.videoDocuments} />
          <Pagination
            count={results.totalPage}
            page={currentPage}
            onChange={handlePaginationChange}
            size="large"
          />
        </Container>
      ) : (
        <NoResultTypography />
      )}
    </>
  );
};

export default SearchResult;
