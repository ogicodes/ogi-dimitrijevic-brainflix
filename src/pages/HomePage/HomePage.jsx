import Header from "../../components/Header/Header";
import SelectedVideo from "../../components/SelectedVideo/SelectedVideo";
import VideoList from "../../components/VideoList/VideoList";
import { useState, useEffect } from 'react'
//import videoDetails from '../../data/video-details.json';
import axios from "axios";



export default function HomePage() {

    const [selectedVideoId, setSelectedVideoId] = useState(null)

    useEffect(() => {
        //goes to the api and gets the key
        async function getApiKey() {
            const response = await axios.get('https://unit-3-project-api-0a5620414506.herokuapp.com/register')
            return response.data.api_key
        }
        //holds the key as a variable
        const apiKey = getApiKey()

        //class that runs all of my subsequent api calls using the above key in the constructor 
        class BrainFlixApi {

            //constructor that only takes the key as a parameter
            constructor(apiKey) {
                //constructor has 3 initial properties, the key, base url and a new instance of axios
                this.apiKey = apiKey 
                this.baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com'
                this.api = axios.create()
            }
        
            // get videos method gets the videos from the api using the base url endpoint and api key
            async getVideos() {
                const endpoint ='/videos'
                try {
                    const response = await this.api.get(`${this.baseUrl}${endpoint}?api_key=<${this.apiKey}>`);
                    return response.data
                } 
                  
                catch (error) {
                    console.error('Error', error);
                    throw error;
                }
            }
        }
        // new instance of the api class that runs the get videos method
        const brainFlixGetVideos = new BrainFlixApi(apiKey)

        // grabs the videos data and stores it in a variable
        async function reciveVideos() {
            const videos = await brainFlixGetVideos.getVideos()
            return videos
        }
        
        reciveVideos()

        setSelectedVideoId(videos)


      }, [selectedVideoId] )

    const selectedVideo = selectedVideoId.find((video) => {
      return video.id === "84e96018-4022-434e-80bf-000ce4cd12b8"
    })

    return (
        <>
        <Header />
        <SelectedVideo selectedVideo={selectedVideo} />
        <VideoList setSelectedVideoId={setSelectedVideoId} selectedVideoId={selectedVideoId} />
        </>
    )
}