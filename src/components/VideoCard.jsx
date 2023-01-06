import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/Constants";

export default function VideoCard({ video }) {
  const {
    id: { videoId },
    snippet,
  } = video;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "305px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px", md: "305px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1E1E1E", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelID
              ? `/channel/${snippet?.channelID}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
}
