"use client";

import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";
import SearchTagList from "./SearchTagList";

export default function Home() {
  return (
    <>
      <SearchBar />
      <SearchTagList />
      <SearchResult />
    </>
  );
}
