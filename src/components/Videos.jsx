import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

export default function Videos({ videos, direction }) {
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos && videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetails={item}/>}
        </Box>
      ))}
    </Stack>
  );
}
