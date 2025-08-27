import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [registerFeild, setRegisterFeild] = useState({
    fullname: "",
    username: "",
    password: "",
    avatar: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);

  // Xử lý chọn ảnh và hiển thị preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);
      setRegisterFeild({ ...registerFeild, avatar: previewUrl });
    }
  };

  const handleRegister = (event, nameFeild) => {
    setRegisterFeild({ ...registerFeild, [nameFeild]: event.target.value });
  };

  useEffect(() => {
    console.log(registerFeild);
  }, [registerFeild]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dữ liệu gửi lên backend:", registerFeild);
    
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#0f0f0f] text-white px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-[#212121] p-6 sm:p-8 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="h-16 sm:w-20 sm:h-20"
          />
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-center mb-2">
          Tạo tài khoản YouTube
        </h2>
        <p className="text-md sm:text-sm md:text-base text-gray-400 text-center mb-6">
          Đăng ký để sử dụng dịch vụ của Google
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            name="fullname"
            value={registerFeild.fullname}
            onChange={(event) => handleRegister(event, "fullname")}
            placeholder="Tên của bạn"
            className="w-full px-3 sm:px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="username"
            value={registerFeild.username}
            onChange={(event) => handleRegister(event, "username")}
            placeholder="Email"
            className="w-full px-3 sm:px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            name="password"
            value={registerFeild.password}
            onChange={(event) => handleRegister(event, "password")}
            placeholder="Mật khẩu"
            className="w-full px-3 sm:px-4 py-2 border border-gray-600 bg-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Upload ảnh */}
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
            {selectedImage && (
              <div className="w-24 h-24 overflow-hidden border-2 border-gray-500">
                <img
                  src={selectedImage}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Register button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Tạo tài khoản
          </button>
        </form>

        {/* Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-6 text-sm">
          <Link to="/login" className="text-md text-blue-500 hover:underline">
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
