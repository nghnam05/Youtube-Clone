import React from 'react';

const AdCart = () => {
  return (
    <div className="w-full bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg hidden md:block">
      {/* Banner */}
      <div className="w-full h-44 sm:h-44 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center overflow-hidden">
        <img
          src="https://i.pinimg.com/1200x/e7/e4/9d/e7e49d7f59a3f08e441e0f1fb0fe8a3f.jpg"
          alt="ad-banner"
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Nội dung */}
      <div className="p-4 sm:p-5 flex flex-col gap-3">
        <h3 className="text-base sm:text-lg font-bold text-white">
          Enjoy 50% Off for 9 Months
        </h3>
        <p className="text-xs sm:text-sm text-gray-400">Được tài trợ</p>

        <div className="flex flex-col gap-2">
          <div className="bg-[#2a2a2a] px-4 py-3 rounded-lg text-sm hover:bg-[#3a3a3a] cursor-pointer transition-colors duration-200">
            🎯 Target by Location
            <p className="text-gray-400 text-xs mt-1">
              Choose Country, State, or City
            </p>
          </div>
          <div className="bg-[#2a2a2a] px-4 py-3 rounded-lg text-sm hover:bg-[#3a3a3a] cursor-pointer transition-colors duration-200">
            🔑 Get Residential Proxies
            <p className="text-gray-400 text-xs mt-1">
              Enjoy 50% Off with Promo Code IPR50
            </p>
          </div>
          <div className="bg-[#2a2a2a] px-4 py-3 rounded-lg text-sm hover:bg-[#3a3a3a] cursor-pointer transition-colors duration-200">
            ⚡ ISP Proxies
            <p className="text-gray-400 text-xs mt-1">High Anonymity & Speed</p>
          </div>
        </div>

        <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 text-sm sm:text-base transition-colors duration-200">
          Truy cập trang web
        </button>
      </div>
    </div>
  );
};

export default AdCart;