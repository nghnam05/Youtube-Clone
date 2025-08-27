import React, { useState } from "react";
import { Link } from "react-router-dom";

const Profile = ({ isSidebarOpen }) => {
  const [activeTab, setActiveTab] = useState("Trang chủ"); // tab mặc định

  const tabs = [
    "Trang chủ",
    "Video",
    "Danh sách phát",
    "Cộng đồng",
    "Giới thiệu",
  ];

  return (
    <div
      className={`flex flex-col mt-[65px] px-2 py-3 sm:px-4 lg:px-6 bg-black text-white min-h-screen transition-all duration-300 
      ${isSidebarOpen ? "lg:ml-[280px]" : "lg:ml-0"}`}
    >
      {/* Cover banner */}
      <div className="w-full h-40 sm:h-60 bg-gray-700 rounded-xl overflow-hidden">
        <img
          src="https://i.ytimg.com/vi/aqz-KE-bpKQ/maxresdefault.jpg"
          alt="channel banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Channel info */}
      <div className="flex flex-col sm:flex-row sm:items-center mt-4 gap-6">
        <div className="flex items-center gap-4">
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLR9J4A8Yy2uRNRJkZsNqBvFZzZs2mQn8S1EZqJf=s88-c-k-c0x00ffffff-no-rj"
            alt="avatar"
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Tên Kênh Của Bạn</h2>
            <p className="text-gray-400 text-sm">
              1,25 Tr người đăng ký • 150 video
            </p>
          </div>
        </div>
        <button className="bg-white text-black px-3 py-2 sm:px-5 sm:py-2 md:px-8 md:py-2 rounded-full font-semibold hover:bg-gray-200 transition">
          Đăng ký
        </button>
      </div>

      {/* Tabs menu */}
      <div className="flex gap-3 sm:gap-6 mt-6 border-b border-gray-700 text-gray-400 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 px-2 sm:px-3 border-b-2 transition ${
              activeTab === tab
                ? "text-white border-white"
                : "hover:text-white border-transparent hover:border-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Video nhỏ sau tabs menu (video giới thiệu) */}
      {/* Video nổi bật sau tabs */}
      <div className="mt-6">
        <div className="flex flex-col sm:flex-row gap-3 bg-[#0f0f0f] rounded-lg overflow-hidden p-3 max-w-3xl">
          {/* Thumbnail */}
          <div className="flex-shrink-0 w-full sm:w-64">
            <img
              src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              alt="featured video"
              className="w-full h-40 object-cover rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-start">
            <h3 className="text-base font-semibold line-clamp-2">
              React JS Complete Crash Course 🔥 | Full Crash Course 2025
            </h3>
            <p className="text-gray-400 text-xs mt-1">
              2.2K lượt xem • 10 ngày trước
            </p>
            <p className="text-gray-300 text-sm mt-2 line-clamp-3">
              Welcome to this React JS Crash Course designed for beginners as
              well as developers looking to refresh their skills. In this
              tutorial, you’ll learn everything you need to start building
              powerful web applications...
            </p>
          </div>
        </div>
      </div>

      {/* Video grid */}
      <div className="mt-6 px-2">
        <h3 className="text-xl font-semibold mb-4">Video phổ biến</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-4 gap-y-5">
          {[...Array(8)].map((_, index) => (
            <Link
              to={"/watch/1"}
              key={index}
              className="bg-[#0f0f0f] rounded-lg overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                alt="video thumbnail"
                className="w-full h-44 object-cover"
              />
              <div className="p-3">
                <h3 className="text-sm font-semibold line-clamp-2">
                  Video {index + 1} - Tiêu đề video mẫu hiển thị ở đây
                </h3>
                <p className="text-gray-400 text-xs mt-1">
                  100K lượt xem • 2 ngày trước
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
