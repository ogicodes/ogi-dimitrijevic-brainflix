import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Upload from "./pages/Upload/Upload.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="upload" element={<Upload />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
