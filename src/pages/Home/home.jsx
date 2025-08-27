import React from 'react';
import Sliderbar from '../../components/sliderbar';
import HomePage from '../../components/homePage';

const Home = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <div className="home-page w-full flex">
      
      <HomePage isOpen={isSidebarOpen}></HomePage>
    </div>
  );
};

export default Home;