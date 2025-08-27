import React, { useRef, useEffect } from "react";
import {Link} from 'react-router-dom'
const HomePage = ({ isOpen }) => {
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

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("dragging");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };
    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };
    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("dragging");
    };
    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1; // multiplier để tăng/giảm độ nhạy
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    // touch support
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const touchStart = (e) => {
      touchStartX = e.touches[0].pageX - slider.offsetLeft;
      touchScrollLeft = slider.scrollLeft;
    };
    const touchMove = (e) => {
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - touchStartX) * 1;
      slider.scrollLeft = touchScrollLeft - walk;
    };
    slider.addEventListener("touchstart", touchStart, { passive: true });
    slider.addEventListener("touchmove", touchMove, { passive: true });

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
      slider.removeEventListener("touchstart", touchStart);
      slider.removeEventListener("touchmove", touchMove);
    };
  }, []);

  return (
    <div
      className={`home-page flex flex-col overflow-x-hidden flex-1 min-h-[100vh] transition-all duration-300 ${
        isOpen ? "ml-[270px]" : "ml-0"
      }`}
    >
      <div
        ref={sliderRef}
        // note: dùng inline-flex + hide-scrollbar + drag style
        className={`home-page_options inline-flex gap-2.5 hide-scrollbar overflow-x-auto whitespace-nowrap bg-black px-4 py-3 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent transition-all duration-300 ${
          isOpen
            ? "fixed top-[65px] md:top-[67.3px] left-[275px] w-[calc(100%-270px)] z-20"
            : "fixed top-[65px] md:top-[67.3px] left-0 w-full z-20"
        }`}
      >
        {categories.map((item, index) => (
          <button
            key={index}
            className={`px-4 py-1.5 rounded-lg text-sm flex-shrink-0 font-semibold ${
              index === 0 ? "bg-white text-black" : "bg-gray-900 text-white"
            } hover:cursor-pointer`}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="home-page_main h-full grid pt-[150px] pb-8 px-8 
    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {/* Video Item */}
        <Link to={'/watch/1'} className="list-youtube_video w-full flex flex-col cursor-pointer">
          {/* Thumbnail */}
          <div className="relative w-full h-[220px]">
            <img
              src="https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
              alt="video thumbnail"
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
            {/* Thời lượng video */}
            <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
              10:21
            </span>
          </div>

          {/* Info */}
          <div className="flex mt-3 gap-3">
            {/* Avatar channel */}
            <img
              src="https://i.pinimg.com/1200x/60/5f/94/605f947a8c73059c03e58d95cd905561.jpg"
              alt="channel avatar"
              className="w-10 h-10 rounded-full"
            />

            {/* Text info */}
            <div className="flex flex-col text-sm">
              <h3 className="text-white font-medium line-clamp-2">
                Rick Astley - Never Gonna Give You Up (Official Music Video)
              </h3>
              <span className="text-gray-400 text-xs mt-1">Rick Astley</span>
              <span className="text-gray-400 text-xs">
                1.5B views • 14 years ago
              </span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
