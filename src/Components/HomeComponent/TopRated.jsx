import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";
import { MdOutlineStarRate } from "react-icons/md";

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
    <div>
      <div className="flex mt-5 gap-2 items-center container mx-auto text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold">
         <h1 className="font-anc">
        TOP RATED 
      </h1>
      
      <div className="flex text-yellow-400">
        <MdOutlineStarRate />
        <MdOutlineStarRate />
        <MdOutlineStarRate />
      </div>
     
      </div>
    <div className="w-full relative flex items-center justify-center gap-2">
      {/* LEFT ARROW */}
      <div className="hidden md:block">
        <button className="swiper-button-prev custom-nav-left">
          <CiCircleChevLeft size={35} />
        </button>
      </div>

      {/* SWIPER WRAPPER */}
      <div className="container mx-auto my-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-nav-right",
            prevEl: ".custom-nav-left",
          }}
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
                className="hover:scale-95 duration-300 rounded-xl text-center h-full flex flex-col justify-center shadow"
              >
                <div className="relative">
                  <div className="absolute top-0 bg-[#efefef] border-b border-r border-gray-300 left-0 items-center justify-center  px-3 text-black rounded-tl-xl rounded-br-xl">
                    <p className="shiny-text font-bold">{item.rating}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full md:h-50 h-35 mx-auto rounded-t-xl object-cover"
                  />
                </div>
                <div className="border-r border-l border-b border-gray-300 rounded-br-xl rounded-bl-xl">
                <h4 className="mt-2 text-[16px] px-2 font-semibold truncate">
                  {item.title}
                </h4>
                <p className="pb-1 text-[12px]">
                  EP : {item.episodes || 'N/A'}
                </p>
                </div>
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
    </div>
  );
};

export default TopRated;
