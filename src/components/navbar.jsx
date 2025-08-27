import React, { useEffect, useRef, useState } from "react";
import "../assets/css/customStyle.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SecurityIcon from "@mui/icons-material/Security";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Navbar = ({ isSidebarOpen, setSidebarOpen }) => {
  const [isShow, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [proFilePic] = useState(
    "https://i.pinimg.com/736x/c9/2f/e8/c92fe814f244075c3b7ed54ac371a358.jpg"
  );

  const profileRef = useRef(null);
  const showSearchRef = useRef(null);

  // Ẩn search khi click ra ngoài
  useEffect(() => {
    const handleClickSearchOutside = (event) => {
      if (
        showSearchRef.current &&
        !showSearchRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickSearchOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickSearchOutside);
  }, []);

  // Ẩn menu profile khi click ra ngoài
  useEffect(() => {
    const handleClickOutSide = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShow(false);
  };

  return (
    <div className="fixed top-0 navigation w-full bg-black py-3 px-4 md:px-20 flex items-center justify-between text-white z-50">
      {/* logo + hamburger */}
      <div className="flex items-center gap-x-3 md:gap-x-5">
        <button
          className="hover:cursor-pointer"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <MenuIcon sx={{ fontSize: 30 }} className="text-white" />
        </button>
        <Link to={"/"} className="flex items-center gap-x-1">
          <YouTubeIcon sx={{ fontSize: 32, color: "red" }} />
          <span className="font-youtube text-xl md:text-2xl font-medium tracking-tight">
            Voutube
          </span>
        </Link>
      </div>

      {/* search */}
      <div
        className="flex items-center justify-center flex-1 mx-2"
        ref={showSearchRef}
      >
        {/* Desktop search */}
        <div className="hidden md:flex items-center w-[500px] border border-gray-700 rounded-full overflow-hidden bg-[#121212]">
          <input
            type="text"
            placeholder="Tìm kiếm"
            className="flex-1 px-4 py-2 outline-none text-sm bg-transparent text-white"
          />
          <button className="px-4 py-2 hover:bg-[#272727] border-l border-gray-700">
            <SearchIcon className="text-white" />
          </button>
        </div>

        {/* Mobile search */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#272727]"
          onClick={() => setShowSearch(!showSearch)}
        >
          <SearchIcon className="text-white" />
        </button>
        {showSearch && (
          <div className="absolute top-16 left-0 z-10 w-full px-4 md:hidden">
            <div className="flex items-center border border-gray-700 rounded-full bg-[#121212]">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="flex-1 px-4 py-2 outline-none text-base bg-transparent text-white"
              />
              <button
                className="px-4 hover:bg-[#272727] border-l border-gray-700"
                onClick={() => setShowSearch(false)}
              >
                <SearchIcon className="text-white" />
              </button>
            </div>
          </div>
        )}

        {/* Mic */}
        <button className="hidden md:block ml-4 p-2 rounded-full bg-[#272727]">
          <MicIcon className="text-white" />
        </button>
      </div>

      {/* phần thông tin */}
      <div className="flex items-center gap-x-2 md:gap-x-3">
        {isLoggedIn ? (
          <>
            <Link to={"/upload"}>
              <button className="flex items-center gap-x-1 px-4 py-1.5 bg-[#272727] rounded-lg hover:bg-[#3f3f3f]">
                <AddIcon />
                <span className="hidden sm:block">Tạo</span>
              </button>
            </Link>

            <div className="hover:bg-[#272727] p-2 rounded-full cursor-pointer">
              <NotificationsNoneIcon />
            </div>

            {/* Profile */}
            <div className="relative" ref={profileRef}>
              <div
                className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] cursor-pointer"
                onClick={() => setShow(!isShow)}
              >
                <img
                  src={proFilePic}
                  alt="avatar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              {isShow && (
                <ul className="absolute z-50 p-4 top-[110%] right-0 w-[250px] bg-[#212121] rounded-lg shadow-lg">
                  <li className="flex items-center gap-2 hover:bg-[#333] p-2 rounded-md cursor-pointer">
                    <SecurityIcon /> Thông tin tài khoản
                  </li>
                  <li className="flex items-center gap-2 hover:bg-[#333] p-2 rounded-md cursor-pointer">
                    <AdminPanelSettingsIcon /> Cài đặt quyền riêng tư
                  </li>
                  <li
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:bg-[#333] p-2 rounded-md cursor-pointer"
                  >
                    <LoginIcon /> Đăng xuất
                  </li>
                </ul>
              )}
            </div>
          </>
        ) : (
          <div
            className="relative w-[35px] h-[35px] md:w-[40px] md:h-[40px] cursor-pointer"
            onClick={() => setShow(!isShow)}
          >
            <img
              src="https://i.pinimg.com/736x/34/0d/0a/340d0a8eb7896e54a5d25a7f3faa05f3.jpg"
              alt="avatar mặc định"
              className="w-full h-full rounded-full object-cover"
            />
            {isShow && (
              <ul className="absolute z-50 p-4 top-[110%] right-0 w-[220px] bg-[#212121] rounded-lg shadow-lg">
                <li className="flex items-center gap-2 hover:bg-[#333] p-2 rounded-md cursor-pointer">
                  <SecurityIcon /> Trợ giúp
                </li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 hover:bg-[#333] p-2 rounded-md cursor-pointer"
                  onClick={() => setShow(false)}
                >
                  <LoginIcon /> Đăng nhập
                </Link>
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
