import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoList from "../../components/VideoList/VideoList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HomePage(props) {
  const { videoId } = useParams();

  const [videoList, setVideoList] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  async function getVideos() {
    try {
      const response = await axios.get(`http://localhost:8080/videos`);
      setVideoList(response.data);
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  }

  async function getVideoDetails() {
    try {
      const response = await axios.get(
        `http://localhost:8080/videos/${videoId}`
      );
      setSelectedVideo(response.data[0]);
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
    
  }

  async function getFirstVideo() {
    try {
      const response = await axios.get(
        `http://localhost:8080/videos/84e96018-4022-434e-80bf-000ce4cd12b8`
      );
      setSelectedVideo(response.data[0]);
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  }

  useEffect(() => {
    if (videoId) {
      getVideoDetails();
      return;
    }
    getVideos();
  }, [videoId]);

  if (!selectedVideo) {
    getFirstVideo();
    getVideos();
    return;
  }

  return (
    <>
      { selectedVideo && <SelectedVideo selectedVideo={selectedVideo} /> }
      { selectedVideo && videoList && <VideoList videoList={videoList} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} /> }
    </>
  );
}
