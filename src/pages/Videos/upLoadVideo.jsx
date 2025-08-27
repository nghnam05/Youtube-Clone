import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Tất cả",
  "Âm nhạc",
  "Trực tiếp",
  "Trò chơi",
  "Tin tức",
  "Bóng đá",
  "Phim ảnh",
  "Thời trang",
  "Ẩm thực",
  "Công nghệ",
  "Xe cộ",
  "Động vật",
  "Sức khỏe",
  "Hài hước",
  "Podcast",
  "Làm đẹp",
  "Vlog",
  "Thú cưng",
  "Thể thao",
  "Du lịch",
  "Giáo dục",
  "Review",
  "Hoạt hình",
];

const UploadPage = ({ isSidebarOpen }) => {
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [category, setCategory] = useState(categories[0]);
  const navigate = useNavigate();

  const handleVideoChange = (e) => {
    setVideo(URL.createObjectURL(e.target.files[0]));
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Video đã được đăng tải thành công!\nThể loại: ${category}`);
    navigate("/"); // sau khi upload xong về trang chủ
  };

  return (
    <div
      className={`flex flex-col mt-[65px] px-2 py-3 sm:px-4 lg:px-6 bg-black text-white min-h-screen transition-all duration-300 
      ${isSidebarOpen ? "lg:ml-[280px]" : "lg:ml-0"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-3">
        <h1 className="text-2xl font-bold">Tải video lên</h1>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Left: Upload */}
        <div className="bg-[#111] p-5 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3">📹 Video</h2>
          <label className="block w-full cursor-pointer">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoChange}
              className="hidden"
            />
            <div className="w-full p-6 text-center border-2 border-dashed border-gray-700 rounded-lg hover:border-red-500 transition">
              {video ? (
                <video
                  src={video}
                  controls
                  className="w-full rounded-lg shadow-md"
                />
              ) : (
                <p className="text-gray-400">Chọn hoặc kéo thả video vào đây</p>
              )}
            </div>
          </label>

          {/* Thumbnail */}
          <h2 className="text-lg font-semibold mt-6 mb-3">🖼 Thumbnail</h2>
          <label className="block w-full cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="hidden"
            />
            <div className="w-full p-6  lg:min-h-[150px] text-center border-2 border-dashed border-gray-700 rounded-lg hover:border-red-500 transition">
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt="Thumbnail"
                  className="w-full rounded-lg shadow-md"
                />
              ) : (
                <p className="text-gray-400">Chọn ảnh thumbnail</p>
              )}
            </div>
          </label>
        </div>

        {/* Right: Info */}
        <div className="bg-[#111] p-5 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3">📝 Thông tin video</h2>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Tiêu đề</span>
            <input
              type="text"
              placeholder="Nhập tiêu đề video..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 placeholder-gray-400
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Mô tả</span>
            <textarea
              placeholder="Nhập mô tả video..."
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 placeholder-gray-400
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            ></textarea>
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Tags</span>
            <input
              type="text"
              placeholder="Ví dụ: reactjs, học lập trình..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 placeholder-gray-400
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
          </label>

          {/* Category */}
          <label className="block mb-3">
            <span className="text-sm text-gray-400">Thể loại</span>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 text-white
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            >
              {categories.map((cat, index) => (
                <option
                  key={index}
                  value={cat}
                  className="bg-gray-900 text-white"
                >
                  {cat}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 lg:col-span-2 justify-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-600 rounded-full hover:bg-gray-500 font-medium transition"
          >
            Quay về trang chủ
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-700 font-medium transition"
          >
            Đăng tải
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
