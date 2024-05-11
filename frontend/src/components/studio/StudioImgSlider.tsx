import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import studio from "/images/studio.png";
import studio1 from "/images/studio1.png";
import studio2 from "/images/studio2.png";
import studio3 from "/images/studio3.png";
import studio4 from "/images/studio4.png";

const StudioImgSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={studio}
            alt="studio"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={studio1}
            alt="studio"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={studio2}
            alt="studio"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={studio3}
            alt="studio"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-32 h-32 rounded-lg overflow-hidden">
          <img
            src={studio4}
            alt="studio"
            className="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default StudioImgSlider;
