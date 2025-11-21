import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/HeroSectionImage/hero.jpg";
import img2 from "../../assets/HeroSectionImage/hero1.jpg";
import img3 from "../../assets/HeroSectionImage/hero2.jpg";
import img4 from "../../assets/HeroSectionImage/hero3.jpg";
import img5 from "../../assets/HeroSectionImage/hero4.jpg";
import img6 from "../../assets/HeroSectionImage/hero5.jpg";
import img7 from "../../assets/HeroSectionImage/hero6.jpg";
import img8 from "../../assets/HeroSectionImage/hero7.jpg";
import img9 from "../../assets/HeroSectionImage/hero8.jpg";
import img10 from "../../assets/HeroSectionImage/hero9.jpg";

const animeData = [
  { image: img3, series: "One Piece", dialogue: "I'm going to be the King of the Pirates!" },
  { image: img7, series: "Naruto", dialogue: "I'm not gonna run away! That's my way of the ninja!" },
  { image: img2, series: "Demon Slayer (Tanjiro)", dialogue: "Stop your crying. Be strong!" },
  { image: img5, series: "Darling in the Franxx", dialogue: "I want to die beautifully." },
  { image: img10, series: "Dragon Ball (Goku)", dialogue: "Power comes in response to a need." },
  { image: img8, series: "Jujutsu Kaisen", dialogue: "Nah, I'd win. Don't worry, I'm the strongest." },
  { image: img9, series: "One Piece (Luffy's Hunger)", dialogue: "Meat! I need meat!" },
  { image: img4, series: "Demon Slayer (Zenitsu)", dialogue: "Desperation is pathetic when you know you'll die." },
  { image: img1, series: "Naruto (Friendship)", dialogue: "If you attack my friends, I will kill you!" },
  { image: img6, series: "Jujutsu Kaisen", dialogue: "Nah, I'd win. Don't worry, I'm the strongest." },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="pagination w-full h-[30dvh] md:h-[80dvh] relative">
      <Swiper
        modules={[ Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true,}}
        autoplay={{ delay: 2200, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full"
      >
        {animeData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* TEXT OVERLAY WITH ANIMATION */}
              <div
                className={`absolute bottom-6 left-2 bg-black/50 p-2 md:p-4 rounded-lg text-white max-w-[70%] transition-transform duration-700 ${
                  activeIndex === index ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
                }`}
              >
                <h2 className="text-xl font-bold hidden md:block">{item.series}</h2>
                <p className="text-sm mt-1">{item.dialogue}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
