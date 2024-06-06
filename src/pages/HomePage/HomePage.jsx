import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoList from "../../components/VideoList/VideoList";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function HomePage(props) {

    const apiKey = '9372dfe3-b77b-45f0-9ee0-9530b1dd4438'
    const { videoId } = useParams()

    const [videoList, setVideoList] = useState(null)
    const [selectedVideo, setSelectedVideo] = useState(null)

    async function getVideos() {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`) 
            setVideoList(response.data)

        } catch (error) {
            console.error('Error', error);
            throw error;
        }
    }

    async function getVideoDetails() {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=${apiKey}`)
            setSelectedVideo(response.data)

        } catch (error) {
            console.error('Error', error);
            throw error;
        }
    }

    async function getFirstVideo() {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=${apiKey}`)
            setSelectedVideo(response.data)

        } catch (error) {
            console.error('Error', error);
            throw error;
        }
    }


    useEffect(() => {
        if(videoId) {
            getVideoDetails()
            return
        }
        getVideos()
    },[videoId])

    if(!selectedVideo) {
        getFirstVideo()
        getVideos()
        return
    }


    return (
        <>
            <SelectedVideo selectedVideo={selectedVideo} />
            <VideoList videoList={videoList} selectedVideo={selectedVideo} />
        </>
    )
}