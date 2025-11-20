import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

const TopRated = ({ anime = [] }) => {
  // Filter anime with rating > 9
  const topRatedAnime = anime.filter((item) => item.rating > 9);

  if (topRatedAnime.length === 0) {
    return (
      <p className="text-center mt-10 text-xl font-semibold">
        No top-rated anime found.
      </p>
    );
  }

  return (
    <div className="w-full relative flex items-center justify-center gap-2">
      {/* LEFT ARROW */}
      <div className="hidden md:block">
        <button className="swiper-button-prev custom-nav-left">
          <CiCircleChevLeft size={35} />
        </button>
      </div>

      {/* SWIPER WRAPPER */}
      <div className="container mx-auto my-10">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-nav-right",
            prevEl: ".custom-nav-left",
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={20}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 3, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 15 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
            1280: { slidesPerView: 9, spaceBetween: 20 },
          }}
        >
          {topRatedAnime.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="hover:scale-105 duration-300 bg-[#003049] text-white rounded-xl text-center h-full flex flex-col justify-center shadow"
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 items-center justify-center bg-[#003049] px-2 rounded-tl-xl rounded-br-xl">
                    <p>{item.rating}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-50 mx-auto rounded-t-xl object-cover"
                  />
                </div>

                <h4 className="mt-2 text-[16px] p-2 font-semibold truncate">
                  {item.title}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* RIGHT ARROW */}
      <div className="hidden md:block">
        <button className="swiper-button-next custom-nav-right">
          <CiCircleChevRight size={35} />
        </button>
      </div>
    </div>
  );
};

export default TopRated;
