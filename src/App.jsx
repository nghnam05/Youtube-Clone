import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import Home from "./pages/Home/home";
import Sliderbar from "./components/sliderbar";
import VideoPage from "./pages/Videos/video";
import Profile from "./pages/Profile/profile";
import UploadPage from "./pages/Videos/upLoadVideo";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app w-full min-h-screen bg-[#0f0f0f]">
      <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sliderbar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              isSidebarOpen={isSidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />
        <Route
          path="/watch/:id"
          element={<VideoPage isSidebarOpen={isSidebarOpen} />}
        />
        <Route
          path="/user/:id"
          element={<Profile isSidebarOpen={isSidebarOpen} />}
        />
        <Route
          path="/upload"
          element={<UploadPage isSidebarOpen={isSidebarOpen} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App;
