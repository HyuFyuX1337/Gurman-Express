import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.webp";
import banner3 from "../assets/images/banner3.jpg";
import banner4 from "../assets/images/banner4.webp";

const HeroSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Autoplay]}
      className=""
    >
      <SwiperSlide>
        <img src={banner1} alt="Slider Image 1" className=" w-full bg-cover object-cover h-[300px] sm:h-[500px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} alt="Slider Image 2" className=" w-full bg-cover object-cover h-[300px] sm:h-[500px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner3} alt="Slider Image 3" className=" w-full bg-cover object-cover h-[300px] sm:h-[500px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner4} alt="Slider Image 4" className=" w-full bg-cover object-cover h-[300px] sm:h-[500px]" />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;