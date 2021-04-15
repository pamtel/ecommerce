// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../assests/img/category-bag2.jpg";
import product2 from "../assests/img/watch.jpg";
import product4 from "../assests/img/category-watch2.jpg";
import product5 from "../assests/img/shoe.jpg";
import product6 from "../assests/img/category-dress3.jpg";
import product7 from "../assests/img/category-bag1.jpg";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderTwo = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={3}
    //   navigation
            pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img className="sliderone" src={product1} alt="product" />
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product2} alt="product" />
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product5} alt="product" />
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product7} alt="product" />
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product6} alt="product" />
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product4} alt="product" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderTwo;
