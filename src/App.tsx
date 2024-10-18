import React from 'react';
import Map from "./pages/Map";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import About from "./pages/About";
import News from "./pages/News";
import Analytics from "./pages/Analytics";
import MediaLaw from "./pages/MediaLaw";
import Library from "./pages/Library";
import Projects from "./pages/Projects";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 bg-white">
      <Routes>
        <Route index element={<Layout><Home/></Layout>} />
        <Route path="/about" element={<Layout><About/></Layout>} />
        <Route path="/news" element={<Layout><News/></Layout>} />
        <Route path="/analytics" element={<Layout><Analytics/></Layout>} />
        <Route path="/media-law" element={<Layout><MediaLaw/></Layout>} />
        <Route path="/library" element={<Layout><Library/></Layout>} />
        <Route path="/projects" element={<Layout><Projects/></Layout>} />
        <Route path="/sign-in" element={<Layout><Auth/></Layout>} />
        <Route path="/sign-up" element={<Layout><Auth/></Layout>} />
        <Route path="/map" element={<Map/>} />
      </Routes>
    </div>
  );
}

export default App;
