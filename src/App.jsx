import React from 'react'
import './App.scss'
import Header from './components/Header/Header.jsx'
import DataList from './components/DataList/DataList.jsx'
import SelectedVideo from './components/SelectedVideo/SelectedVideo.jsx'
import { useState } from 'react'
import videoDetails from './data/video-details.json';


export default function App() {
  const [selectedVideoId, setSelectedVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8")

  const selectedVideo = videoDetails.find((video) => {
    return video.id === selectedVideoId
  })


  return (
    <>
    <Header />
    <SelectedVideo selectedVideo={selectedVideo} />
    <DataList setSelectedVideoId={setSelectedVideoId} selectedVideoId={selectedVideoId} />
    </>
  )
}