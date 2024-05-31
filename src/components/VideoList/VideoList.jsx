import VideoCard from "../VideoCard/VideoCard";
import videoDetails from '../../data/video-details.json';
import '../VideoList/VideoList.scss';

export default function VideoList(props){



    return(
        <section className="list">
            <h2 className="list__heading">NEXT VIDEOS</h2>
            {videoDetails.filter((video) => {
                return video.id  !== props.selectedVideoId
            }).map((video) => {
                return <VideoCard key={video.id} video={video} setSelectedVideoId={props.setSelectedVideoId}/>
            })}

        </section>
    )
}