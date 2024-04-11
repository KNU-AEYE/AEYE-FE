"use client";
import Vidpane from "@/app/components/Vidpane";
import { useRecoilValue } from "recoil";
import { searchQueryState } from "@/app/recoil-states";
import { useEffect } from "react";

export default function SearchResult() {
  const searchQuery = useRecoilValue(searchQueryState);
  const fetchResults = async () => {
    const res = await fetch(`https://api.a-eye.live/video/search?keyword=${searchQuery}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (res.ok) {
      const jsonData = await res.json();
      console.log(jsonData.data);
    }
  }
  useEffect(() => { 
    fetchResults();
  }, [searchQuery]);
  return (
    <>
      <Vidpane />
    </>
  );
}
