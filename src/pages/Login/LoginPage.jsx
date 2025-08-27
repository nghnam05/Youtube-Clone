import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema validation
const schema = yup.object().shape({
  username: yup
    .string()
    .required("Vui lòng nhập tên đăng nhập")
    .min(3, "Username phải ít nhất 3 ký tự"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Password phải ít nhất 6 ký tự"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  
  const onSubmit = async (data) => {
    console.log("Dữ liệu gửi lên backend:", data);
    reset();
   
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#212121] shadow-lg rounded-2xl p-6 sm:p-8 text-white">
        {/* Logo */}
        <div className="flex justify-center mb-3 md:mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="h-14 sm:h-16"
          />
        </div>

        {/* Tiêu đề */}
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-2">
          Đăng nhập
        </h2>
        <p className="text-xs sm:text-lg text-gray-400 text-center mb-6">
          Đăng nhập để trải nghiệm các dịch vụ của chúng tôi
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              {...register("username")}
              className="w-full border border-gray-600 rounded-lg px-3 sm:px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>❌</span>
                {errors.username.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Nhập mật khẩu tại đây"
              {...register("password")}
              className="w-full border border-gray-600 rounded-lg px-3 sm:px-4 py-2 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <span>❌</span>
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Quên mật khẩu */}
          <div className="mb-6">
            <Link
              to="#"
              className="text-sm sm:text-lg text-blue-500 hover:underline"
            >
              Quên mật khẩu?
            </Link>
          </div>

          {/* Nút hành động */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <Link
              to="/register"
              className="text-sm text-blue-500 hover:underline"
            >
              Tạo tài khoản mới
            </Link>
            <button
              type="submit"
              disabled={isSubmitting} // disable khi submit
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
            >
              Tiếp theo
            </button>
          </div>
        </form>

        {/* Nút quay lại trang chủ */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-block text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition text-sm sm:text-base"
          >
            ⬅ Quay lại Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
