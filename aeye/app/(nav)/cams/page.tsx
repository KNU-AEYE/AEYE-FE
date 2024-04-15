"use client";

import { useEffect } from "react";
import fetchWithInterception from "@/app/fetchWrapper";

export default function Cams() {
  useEffect(() => {
    fetchWithInterception("https://api.a-eye.live/video", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((jsonData) => console.log(jsonData.data))
      .catch((error) => console.error(error));
  }, []);
  return <div></div>;
}
