import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";

import Videos from "./Videos";

export default function SearchFeed() {
  const { searchTerm } = useParams();
  const [video, setVideo] = useState();

  console.log(searchTerm)

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>setVideo(data.items));
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result for :{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> Videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={video} />}
      </Box>
    </Box>
  );
}
