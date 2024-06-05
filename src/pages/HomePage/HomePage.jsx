import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoList from "../../components/VideoList/VideoList";



export default function HomePage(props) {

    console.log(props.videoList)
    return (
        <>
            <Header />
            <SelectedVideo selectedVideo={props.video} />
            <VideoList setVideoList={props.setVideoList} videoList={props.videoList} setSelectedVideo={props.setSelectedVideo} />
        </>
    )
}