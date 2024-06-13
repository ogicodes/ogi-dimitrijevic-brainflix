import VideoCard from "../VideoCard/VideoCard";
import "../VideoList/VideoList.scss";
import { Link } from "react-router-dom";

export default function VideoList(props) {
  return (
    <section className="list">
      <h2 className="list__heading">NEXT VIDEOS</h2>
      {props.videoList
        .filter((video) => {
          return video.id !== props.selectedVideo.id;
        })
        .map((video) => {
          return (
            <Link key={video.id} to={`/videos/${video.id}`}>
              <VideoCard
                video={video}
                setSelectedVideoId={props.setSelectedVideo}
              />
            </Link>
          );
        })}
    </section>
  );
}
