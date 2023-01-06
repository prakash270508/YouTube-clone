import React, { useEffect, useState } from "react";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import Loader from "./Loader";
import Videos from "./Videos";

export default function VideoDetail() {
  const { id } = useParams();

  const [videoDetail, setVideoDetail] = useState(null);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (videoData) => setVideo(videoData.items)
    );
  }, [id]);

  if (!videoDetail?.snippet) {
    return <Loader />;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: { xs: "100%" ,sm: "100%", md: "76vw"}, position: "sticky", top: "66px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              sx={{ width: "100%", position: "sticky", top: "86px", Pl:"2vw"}}
              controls
              className="react-player"
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ color: "#fff" }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography
                  variant={{ sm: "subtitle1", md: "h6" }}
                  color="#fff"
                >
                  {channelTitle}
                  <CheckCircleIcon
                    sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={video} direction="row" />
        </Box>
      </Stack>
    </Box>
  );
}
