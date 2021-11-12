import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  const renderedList = props.videos.map((video) => {
    return <VideoItem video={video} key={video.etag} />;
  });

  return <div>{renderedList}</div>;
};
export default VideoList;
