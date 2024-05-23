import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchQueryState, selectedTagsState } from "@/app/recoil-states";
import fetchWithInterception from "@/app/fetchWrapper";
import Vidpane from "@/app/components/Vidpane";
import { Grid, Typography, Pagination, Container } from "@mui/material";

const FETCH_TIMEOUT = 200;
const PAGE_SIZE = 12;

function Vidgroup({ videos }: { videos: VideoDocument[] }) {
  return (
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Vidpane video={video} />
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
  const [currentPage, setCurrentPage] = useState<number>(0);
  const selectedTags = useRecoilValue(selectedTagsState);
  const cityPlaceholder = "";
  const districtPlaceholder = "";

  useEffect(() => {
    let searchTimeout: NodeJS.Timeout;

    const fetchResults = () => {
      fetchWithInterception(
        `https://api.a-eye.live/video/search/v2?keyword=${searchQuery}&city=${cityPlaceholder}&district=${districtPlaceholder}&tag=${
          selectedTags === undefined ? "" : selectedTags
        }&page=${currentPage}&size=${PAGE_SIZE}`,
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
  }, [searchQuery, currentPage, selectedTags]);

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page - 1);
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
            page={currentPage + 1}
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
