import React, { useState } from "react";
import "../styles/HomePage.css";
import Footer from "../components/Footer/Footer";
import GameList from "../components/GamesList";
import { Swiper, SwiperSlide } from "swiper/react";
import App from "./Slider";

const HomePage = () => {
  const [page, setPage] = useState(1);
  return (
    <div>
      <App />
      <div className="home_top">
      
      <h1>Games</h1>
    </div>
      <div>
        <GameList page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default HomePage;
