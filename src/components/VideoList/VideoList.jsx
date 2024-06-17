import VideoCard from "../VideoCard/VideoCard";
import "../VideoList/VideoList.scss";
import { Link } from "react-router-dom";

export default function VideoList({ videoList, selectedVideo, setSelectedVideo }) {

  return (
    <section className="list">
      <h2 className="list__heading">NEXT VIDEOS</h2>
      {videoList.filter((video) => {
          return video.id !== selectedVideo.id;
        }).map((video) => {
          return (
            <Link to={`/videos/${video.id}`}>
              <VideoCard
                key={video.id}
                video={video}
                setSelectedVideoId={setSelectedVideo}
              />
            </Link>
          );
        })}
    </section>
  );
}
