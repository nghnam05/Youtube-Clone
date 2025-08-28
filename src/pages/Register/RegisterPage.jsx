import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

// Schema validation
const schema = yup.object().shape({
  fullname: yup
    .string()
    .required("Họ tên không được để trống")
    .min(3, "Họ tên phải ít nhất 3 ký tự"),
  username: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  password: yup
    .string()
    .required("Mật khẩu không được để trống")
    .min(6, "Mật khẩu phải ít nhất 6 ký tự"),
  avatar: yup.string().nullable(),
});

const RegisterPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: { avatar: "" },
  });

  // Upload ảnh
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview local
    const localPreview = URL.createObjectURL(file);
    setPreviewImage(localPreview);

    // Upload lên Cloudinary
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "youtube-clone"); // preset của bạn
    formData.append("folder", "my_uploads");

    const cloudName = "dp1uvjzpc";

    setIsUploading(true);
    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setSelectedImage(res.data.secure_url);
      setValue("avatar", res.data.secure_url, { shouldValidate: true });
    } catch (err) {
      console.error("Lỗi upload:", err);
    } finally {
      setIsUploading(false);
    }
  };

  // Submit form
  const onSubmit = async (data) => {
    console.log("Dữ liệu gửi lên backend:", data);

    // ví dụ gọi API backend
    // await axios.post("http://localhost:5000/api/register", data);

    reset({
      fullname: "",
      username: "",
      password: "",
      avatar: "",
    });
    setSelectedImage(null);
    setPreviewImage(null);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#212121] p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="h-16 object-cover"
          />
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-center mb-2">
          Tạo tài khoản YouTube
        </h2>
        <p className="text-sm md:text-base text-gray-400 text-center mb-6">
          Đăng ký để sử dụng dịch vụ của Google
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Tên của bạn"
            {...register("fullname")}
            className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullname && (
            <p className="text-red-500 text-sm">{errors.fullname.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("username")}
            className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}

          <input
            type="password"
            placeholder="Mật khẩu"
            {...register("password")}
            className="w-full px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}

          {/* Upload avatar */}
          <div className="flex flex-col items-center gap-3">
            <label
              htmlFor="avatar"
              className="cursor-pointer w-full text-center py-2 px-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
            >
              Chọn ảnh đại diện
            </label>
            <input
              id="avatar"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            {errors.avatar && (
              <p className="text-red-500 text-sm">{errors.avatar.message}</p>
            )}

            {(previewImage || selectedImage) && (
              <div className="w-24 h-24 overflow-hidden border-2 border-gray-500 rounded-full">
                <img
                  src={selectedImage || previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isUploading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {isSubmitting || isUploading ? "Đang xử lý..." : "Tạo tài khoản"}
          </button>
        </form>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6 text-sm">
          <Link to="/login" className="text-blue-500 hover:underline">
            Đã có tài khoản? Đăng nhập
          </Link>
          <a href="#" className="text-blue-500 hover:underline">
            Trợ giúp
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
