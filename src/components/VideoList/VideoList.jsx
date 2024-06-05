import VideoCard from "../VideoCard/VideoCard";
import '../VideoList/VideoList.scss';

export default function VideoList(props){

    console.log(props.videoList)

    return(
        <section className="list">
            <h2 className="list__heading">NEXT VIDEOS</h2>
            {props.videoList.filter((video) => {
                return video.id  !== props.setVideoList
            }).map((video) => {
                return <VideoCard key={video.id} video={video} setSelectedVideoId={props.setSelectedVideo}/>
            })}

        </section>
    )
}