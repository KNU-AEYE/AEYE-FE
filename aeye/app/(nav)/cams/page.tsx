"use client";

import { useEffect } from "react";

export default function Cams() {
  const fetchVids = async () => {
    try {
      const res = await fetch("https://api.a-eye.live/video", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (res.ok) {
        const jsonData = await res.json();
        console.log(jsonData.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVids();
  }, []);
  return <div></div>;
}
