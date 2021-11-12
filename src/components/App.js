import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  console.log(videos);

  const onVideoSelect = (video) => {
    console.log("from the app", video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <VideoList videos={videos} onVideoSelect={onVideoSelect} />
    </div>
  );
};
export default App;
