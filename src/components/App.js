import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../api/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { useEffect } from "react/cjs/react.development";

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

    // load first video in list after term submit
    setSelectedVideo(response.data.items[0]);
  };
  console.log(videos);

  const onVideoSelect = (video) => {
    // console.log("From the App.js", video);
    setSelectedVideo(video);
    console.log({ selectedVideo });
  };

  const componentDidMount = () => {
    onTermSubmit("buildings");
  };
  useEffect(() => {
    componentDidMount();
    console.log("mounted");
  }, []);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={onVideoSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
