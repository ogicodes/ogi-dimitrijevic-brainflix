import DataCard from "../DataCard/DataCard";
import videoDetails from '../../data/video-details.json';


export default function DataList(props){



    return(
        <section className="Data__list">
            <h2>Data List</h2>
            {videoDetails.filter((video) => {
                return video.id  !== props.selectedVideoId
            }).map((video) => {
                return <DataCard key={video.id} video={video} setSelectedVideoId={props.setSelectedVideoId}/>
            })}

        </section>
    )
}