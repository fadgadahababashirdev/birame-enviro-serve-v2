import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className="relative h-screen">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <img
            src="../public/cover1.jpeg"
            alt="image one"
            className="w-screen h-screen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../public/cover2.jpeg"
            alt=" image two"
            className="w-screen h-screen"
          />
        </SwiperSlide>
      
      </Swiper>
      <div className="absolute z-20 top-0 left-0 bg-slate-300 w-screen h-screen opacity-30 "></div>
    </div>
  );
};
