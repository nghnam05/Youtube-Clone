import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

// 1️⃣ Schema validation
const schema = yup.object().shape({
  title: yup
    .string()
    .required("Tiêu đề không được để trống")
    .min(3, "Tiêu đề phải ít nhất 3 ký tự"),
  description: yup
    .string()
    .required("Mô tả không được để trống")
    .min(10, "Mô tả quá ngắn"),
  tags: yup.string().required("Vui lòng nhập ít nhất 1 tag"),
  category: yup.string().required("Vui lòng chọn thể loại"),
  video: yup.mixed().required("Vui lòng chọn video"),
  thumbnail: yup.mixed().required("Vui lòng chọn thumbnail"),
});

const UploadPage = ({ isSidebarOpen }) => {
  const [videoPreview, setVideoPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const video = watch("video");
  const thumbnail = watch("thumbnail");

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoPreview(URL.createObjectURL(file));
      setValue("video", file, { shouldValidate: true });
    }
  };

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
      setValue("thumbnail", file, { shouldValidate: true });
    }
  };

  const onSubmit = (data) => {
    alert(
      `Video "${data.title}" đã được đăng tải thành công!\nThể loại: ${data.category}`
    );
    navigate("/");
    console.log(data)
  };

  return (
    <div
      className={`flex flex-col mt-[65px] px-4 py-3 sm:px-4 lg:px-6 bg-black text-white min-h-screen transition-all duration-300
      ${isSidebarOpen ? "lg:ml-[280px]" : "lg:ml-0"}`}
    >
      <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-3">
        <h1 className="text-2xl font-bold">Tải video lên</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Left */}
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
              {videoPreview ? (
                <video
                  src={videoPreview}
                  controls
                  className="w-full rounded-lg shadow-md"
                />
              ) : (
                <p className="text-gray-400">Chọn hoặc kéo thả video vào đây</p>
              )}
            </div>
          </label>
          {errors.video && (
            <p className="text-red-500 text-sm mt-1">{errors.video.message}</p>
          )}

          <h2 className="text-lg font-semibold mt-6 mb-3">🖼 Thumbnail</h2>
          <label className="block w-full cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleThumbnailChange}
              className="hidden"
            />
            <div className="w-full p-6 lg:min-h-[150px] text-center border-2 border-dashed border-gray-700 rounded-lg hover:border-red-500 transition">
              {thumbnailPreview ? (
                <img
                  src={thumbnailPreview}
                  alt="Thumbnail"
                  className="w-full rounded-lg shadow-md"
                />
              ) : (
                <p className="text-gray-400">Chọn ảnh thumbnail</p>
              )}
            </div>
          </label>
          {errors.thumbnail && (
            <p className="text-red-500 text-sm mt-1">
              {errors.thumbnail.message}
            </p>
          )}
        </div>

        {/* Right */}
        <div className="bg-[#111] p-5 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-3">📝 Thông tin video</h2>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Tiêu đề</span>
            <input
              type="text"
              {...register("title")}
              placeholder="Nhập tiêu đề video..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 placeholder-gray-400
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Mô tả</span>
            <textarea
              {...register("description")}
              placeholder="Nhập mô tả video..."
              rows="5"
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 placeholder-gray-400
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Tags</span>
            <input
              type="text"
              {...register("tags")}
              placeholder="Ví dụ: reactjs, học lập trình..."
              className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 mt-1 placeholder-gray-400
                        focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
            />
            {errors.tags && (
              <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
            )}
          </label>

          <label className="block mb-3">
            <span className="text-sm text-gray-400">Thể loại</span>
            <select
              {...register("category")}
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
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-10 lg:col-span-2 justify-center">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-gray-600 rounded-full hover:bg-gray-500 font-medium transition"
          >
            Quay về trang chủ
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2 bg-red-600 rounded-full hover:bg-red-700 font-medium transition disabled:opacity-50"
          >
            Đăng tải
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPage;
