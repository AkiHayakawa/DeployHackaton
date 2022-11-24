import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual,
} from "swiper/core";
import "swiper/swiper-bundle.css";
import "./style.css";
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

export default function App() {
  const slides = [];
  const pageImg = [
    "https://images8.alphacoders.com/710/710329.jpg",
    "https://images4.alphacoders.com/115/1151249.jpg",
    "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DarkSoulsRemastered.jpg",
    "https://images3.alphacoders.com/117/117095.jpg",
    "https://images3.alphacoders.com/190/190065.jpg",
    "https://www.ixbt.com/img/n1/news/2022/1/2/iwJB7OZy7emiGQ5fZFQAMw_large.png",
    "https://images5.alphacoders.com/109/1099191.jpg",
    "https://images6.alphacoders.com/715/715930.jpg",
    "https://images4.alphacoders.com/673/67338.jpg",
  ];
  pageImg.map((item) =>
    slides.push(
      <SwiperSlide key={`slide-${item}`} style={{ listStyle: "none" }}>
        <div className="slide">
          <img width="100%" height="100%" src={item} alt="" />
        </div>
      </SwiperSlide>
    )
  );

  return (
    <Swiper
      id="swiper"
      virtual
      slidesPerView={1}
      // slidesPerColumn={2}
      // slidesPerColumnFill="row"
      spaceBetween={30}
      // slidesPerGroup={2}
      // autoplay
      // loop
      onReachEnd={() => {
        console.log("reach end");
        const tmp = slides.unshift();
        slides.push(tmp);
      }}
      navigation
      pagination
    >
      {slides}
    </Swiper>
  );
}
