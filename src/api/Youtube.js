import axios from "axios";

const KEY = "AIzaSyDZA_VCIz3NuAtQLsO3BQg567RfqthIli8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
