import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";

const App = () => {
  const [videos, setVideos] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };
  console.log(videos);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <VideoList videos={videos} />
    </div>
  );
};
export default App;
