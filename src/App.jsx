import './App.scss'
import HomePage from './pages/HomePage/HomePage.jsx'
import Upload from './pages/Upload/Upload.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'



export default function App() {

  const apiKey = '9372dfe3-b77b-45f0-9ee0-9530b1dd4438'
  const [videoList, setVideoList] = useState(null)
  const [video, setVideo] = useState(null)
  const [selectedVideo, setSelectedVideo] = useState(video)

  useEffect(() => {

      async function getVideos() {
        try {
            const response = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=${apiKey}`) 
            setVideoList(response.data)

            console.log(videoList)
            const video = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${response.data[0].id}?api_key=${apiKey}`)
            setVideo(video)

            const brute = await axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${selectedVideo}?api_key=${apiKey}`)
            setVideo(brute)


        }
        catch (error) {
            console.error('Error', error);
            throw error;
        }
      }
      getVideos()


  }, [] )


  return (
    <BrowserRouter>
      <Routes>
        { video &&
           <Route path='/' element={<HomePage setVideoList={setVideoList} videoList={videoList} video={video} setSelectedVideo={setSelectedVideo} />} />
        }
        <Route path='/:id' element={ <HomePage  />} />
        <Route path='upload' element={<Upload />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}


