import React, { useState } from "react";
import AdCart from "../../components/adCart";
import {Link} from 'react-router-dom'
import '../../assets/css/customStyle.css'
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";


const buttons = [
  { icon: <ThumbUpAltOutlinedIcon fontSize="small" />, label: "16" },
  { icon: <ThumbDownAltOutlinedIcon fontSize="small" />, label: "" },
  { icon: <ShareOutlinedIcon fontSize="small" />, label: "Chia sẻ" }, 
  { icon: <DownloadOutlinedIcon fontSize="small" />, label: "Tải xuống" },
  { icon: <MoreHorizIcon fontSize="small" />, label: "" },
];
const VideoPage = ({ isSidebarOpen }) => {
      const [showTranscript, setShowTranscript] = useState(false);

      const toggleTranscript = () => {
        setShowTranscript(!showTranscript);
      };
 
  const suggestedVideos = [1, 2, 3, 4, 5, 6];

  return (
    <div
      className={`flex flex-col lg:flex-row mt-[65px] px-2 py-3 sm:px-4 lg:px-6 bg-black text-white min-h-screen gap-6 transition-all duration-300
        ${isSidebarOpen ? "lg:ml-[240px]" : "lg:ml-0"}`}
    >
      {/* ==== Video chính + Info ==== */}
      <div className="flex-[5] flex flex-col gap-4 px-2 sm:px-4 lg:px-0">
        {/* Video player */}
        <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
          <video controls autoPlay className="w-full h-full object-cover">
            <source src="your-video.mp4" type="video/mp4" />
            Trình duyệt của bạn không hỗ trợ video.
          </video>
        </div>

        {/* Tiêu đề video */}
        <h1 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4 text-white leading-tight line-clamp-2">
          Đây là tiêu đề video giống YouTube
        </h1>

        {/* Channel info */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center mt-5 border-b border-gray-700 pb-4 gap-4">
          {/* Channel info + Subscribe */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-between items-center gap-3">
            <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
              <Link to={"/user/1"} className="flex items-center gap-3">
                <img
                  src="https://i.pinimg.com/736x/61/cb/7d/61cb7d09f30474851604f3a1a55339a1.jpg"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
                />
                <div className="flex flex-col text-center sm:text-left">
                  <h3 className="font-semibold text-sm sm:text-base text-white">
                    CodingHunger
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    2,86 N người đăng ký
                  </p>
                </div>
              </Link>
              <button className="px-4 sm:px-6 py-1 sm:py-2 bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base rounded-full transition-colors duration-200 whitespace-nowrap">
                Đăng ký
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex w-full sm:w-auto justify-between sm:justify-start gap-2 overflow-x-auto no-scrollbar">
            {buttons.map((btn, i) => (
              <button
                key={i}
                className="flex-none px-2.5 sm:px-4 py-1 sm:py-2 bg-[#272727] hover:bg-[#3f3f3f] 
                 rounded-full flex items-center justify-center gap-1 
                 text-xs sm:text-sm transition-colors duration-200 whitespace-nowrap"
              >
                {btn.icon}
                {btn.label && <span>{btn.label}</span>}
              </button>
            ))}
          </div>
        </div>
        {/* mo ta video */}
        <div className="bg-[#0f0f0f] text-white rounded-lg p-4 sm:p-6 flex flex-col gap-4">
          {/* Views, Date, Hashtags */}
          <div className="text-xs sm:text-sm text-gray-400 space-y-1">
            <p>653 lượt xem • 25 thg 7, 2024</p>
            <p className="flex flex-wrap gap-2">
              <span className="hastag-span">#amazon</span>
              <span className="hastag-span">#learning</span>
              <span className="hastag-span">#coding</span>
            </p>
            <p>
              Link group WhatsApp:{" "}
              <a
                href="https://chat.whatsapp.com/GirrkmP0mN7..."
                className="text-blue-500 hover:underline"
              >
                https://chat.whatsapp.com/GirrkmP0mN7...
              </a>
            </p>
          </div>
          {/* Transcript / Bản chép lời */}
          <div className="flex flex-col gap-2 ">
            <button
              onClick={toggleTranscript}
              className="text-sm sm:text-base text-blue-500 hover:underline self-start"
            >
              {showTranscript ? "Ẩn mô tả" : "Hiện mô tả video"}
            </button>
            {showTranscript && (
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out text-sm sm:text-base text-gray-300 space-y-2 ${
                  showTranscript
                    ? "max-h-[1000px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>1) Frontend: React JS</p>
                <p>2) Backend: Express JS, Node JS</p>
                <p>3) Database: MongoDB</p>
                <p>
                  🎬 In this Exclusive React VIDEO training, we will be
                  covering...
                </p>
                <p>
                  ✅ Learn how to build the FULL YouTube website with FULL Stack
                  MERN with Functionality 👇
                </p>
                <p>1️⃣ Signin using Cookie Authentication</p>
                <p>2️⃣ SignUp</p>
                <p>3️⃣ Upload Video, Comment</p>
                <p>
                  ⚒ And the tools & technologies you need to succeed as a Modern
                  React JS developer
                </p>
                <p className="text-blue-500 hover:underline">
                  #reactjs #youtubeClone #amazon #youtube #learning #webproject
                  #mernproject #coding
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Comment section */}
        <div className="mt-5 sm:mt-6">
          <h2 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4 text-white">
            11 Bình luận
          </h2>

          {/* Form bình luận */}
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <input
              type="text"
              placeholder="Viết bình luận..."
              className="flex-1 bg-[#1e1e1e] border-b border-gray-600 focus:border-gray-400 outline-none py-1 text-sm sm:text-base text-white placeholder-gray-400 transition-colors duration-200"
            />
          </div>

          {/* List bình luận */}
          {[1, 2, 3].map((cmt) => (
            <div key={cmt} className="flex gap-2 sm:gap-3 mb-4 sm:mb-5">
              <img
                src={`https://i.pravatar.cc/40?img=${cmt + 5}`}
                alt="avatar"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">
                  User {cmt}{" "}
                  <span className="text-xs text-gray-400 ml-2">
                    1 giờ trước
                  </span>
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Nội dung bình luận {cmt}...
                </p>
                <div className="flex gap-3 sm:gap-4 mt-1 text-xs sm:text-sm text-gray-400">
                  <button className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                    👍 50
                  </button>
                  <button className="flex items-center gap-1 hover:text-white transition-colors duration-200">
                    👎
                  </button>
                  <button className="hover:text-white transition-colors duration-200">
                    Phản hồi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==== Video gợi ý + Ad ==== */}
      <div className="flex-[2] w-full lg:w-[380px] flex flex-col gap-3 sm:gap-4">
        <AdCart />
        <h3 className="text-xl font-medium md:hidden">
          Các video phổ biến dành cho bạn
        </h3>
        {suggestedVideos.map((item) => (
          <div
            key={item}
            className="flex gap-3 cursor-pointer hover:bg-[#2a2a2a] p-2 rounded-lg transition-colors duration-200"
          >
            <img
              src="https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg"
              alt="thumbnail"
              className="w-36 sm:w-40 h-20 sm:h-24 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex flex-col justify-between">
              <h4 className="font-semibold text-xs sm:text-sm line-clamp-2 text-white">
                Video gợi ý số {item} với tiêu đề dài như thật
              </h4>
              <p className="text-[10px] sm:text-xs text-gray-400">Tên kênh</p>
              <p className="text-[10px] sm:text-xs text-gray-400">
                200K lượt xem • 3 ngày trước
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
