import React from 'react';
import {Link} from 'react-router-dom'
import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Sliderbar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-30" onClick={onClose}></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[275px] overflow-y-scroll bg-[#0f0f0f] text-white p-4 transform transition-transform duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center gap-x-3">
          <button onClick={onClose} className="hover:cursor-pointer">
            <MenuIcon sx={{ fontSize: 30 }} className="text-white" />
          </button>
          <a href="/">
            <div className="flex items-center gap-x-1">
              <YouTubeIcon sx={{ fontSize: 32, color: "red" }} />
              <span className="font-youtube text-xl md:text-2xl font-medium tracking-tight">
                Voutube
              </span>
            </div>
          </a>
        </div>

        {/* Nội dung menu */}
        <div className="mt-6 space-y-4">
          <div className="px-2 space-y-2 overflow-y-auto h-[calc(100%-64px)]">
            {/* Nhóm 1 */}
            <a href="/">
              <MenuItem icon={<HomeIcon />} label="Trang chủ" />
            </a>
            <MenuItem icon={<ExploreIcon />} label="Khám phá" />
            <MenuItem icon={<SubscriptionsIcon />} label="Kênh đăng ký" />

            <hr className="border-gray-700 my-2" />

            {/* Nhóm 2 */}
            <p className="text-sm text-gray-400 px-2">Bạn</p>

            <MenuItem icon={<VideoLibraryIcon />} label="Thư viện" />
            <MenuItem icon={<HistoryIcon />} label="Lịch sử" />
            <MenuItem icon={<SlideshowIcon />} label="Video của bạn" />
            <MenuItem icon={<WatchLaterIcon />} label="Xem sau" />
            <MenuItem icon={<ThumbUpAltIcon />} label="Video đã thích" />

            <hr className="border-gray-700 my-2" />

            {/* Nhóm 3 */}
            <p className="text-sm text-gray-400 px-2">Khám phá</p>
            <MenuItem icon={<ExploreIcon />} label="Thịnh hành" />
            <MenuItem icon={<ExploreIcon />} label="Âm nhạc" />
            <MenuItem icon={<ExploreIcon />} label="Trò chơi" />
            <MenuItem icon={<ExploreIcon />} label="Tin tức" />
            <MenuItem icon={<ExploreIcon />} label="Thể thao" />

            <hr className="border-gray-700 my-2" />

            {/* Nhóm 4 */}
            <MenuItem icon={<SettingsIcon />} label="Cài đặt" />
            <MenuItem icon={<HelpOutlineIcon />} label="Trợ giúp" />
          </div>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ icon, label }) => {
  return (
    <div className="hover:bg-[#272727] p-2 rounded flex items-center gap-x-3 cursor-pointer">
      {icon}
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
};


export default Sliderbar;