"use client";
import Vidpane from "@/app/components/Vidpane";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/app/recoil-states";
import { useEffect } from "react";

export default function SearchResult() {
  const searchQuery = useRecoilValue(searchQueryState);
  useEffect(() => { 
    console.log(searchQuery)
  }, [searchQuery]);
  return (
    <>
      <Vidpane />
    </>
  );
}
