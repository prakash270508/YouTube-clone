import React, { useEffect, useState } from "react";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";
import { Box,} from "@mui/material";

export default function ChannelDetail() {
  const [chanelDetail, setChannelDetail] = useState();
  const [vidos, setVideos] = useState(null);

  const { id } = useParams();

  console.log(id)

  // console.log(vidos)

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromApi(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      // console.log(data?.items[0])

      const videosData = await fetchFromApi(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
      // console.log(videosData?.items)
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetails={chanelDetail} marginTop="-93px" marginLeft="40px"/>
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={vidos} />
      </Box>
    </Box>
  );
}
