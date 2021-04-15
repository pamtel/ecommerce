// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import product1 from "../assests/img/category-bag2.jpg";
import product2 from "../assests/img/watch.jpg";
import product3 from "../assests/img/category-dress1.jpg";
import product4 from "../assests/img/category-watch2.jpg";
import product5 from "../assests/img/shoe.jpg";
import product6 from "../assests/img/category-dress3.jpg";
import product7 from "../assests/img/category-bag1.jpg";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const SliderOne = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={7}
      navigation
    >
      <SwiperSlide>
        <img className="sliderone" src={product1} alt="product" />
        <span>Holiday Print</span>
        <br></br>
        <span className="line-height">Flannel Sheet Set..</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product2} alt="product" />
        <span>Norbury</span>
        <br></br>
        <span className="line-height">Scandinavian</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product5} alt="product" />
        <span>50" x 70" Jersey</span>
        <br></br>
        <span className="line-height">Weighted Throw...</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product3} alt="product" />
        <span>Flannel</span>
        <br></br>
        <span className="line-height">Herringbone..</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product6} alt="product" />
        <span>Heavyweight</span>
        <br></br>
        <span className="line-height">blend Quilt..</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product4} alt="product" />
        <span>Holiday Print</span>
        <br></br>
        <span className="line-height">Flannel Sheet Set..</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product7} alt="product" />
        <span>Norbury</span>
        <br></br>
        <span className="line-height">Scandinavian</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product3} alt="product" />
        <span>Heavyweight</span>
        <br></br>
        <span className="line-height">blend Quilt..</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product6} alt="product" />
        <span>50" x 70" Jersey</span>
        <br></br>
        <span className="line-height">Weighted Throw...</span>
      </SwiperSlide>

      <SwiperSlide>
        <img className="sliderone" src={product7} alt="product" />
        <span>Flannel</span>
        <br></br>
        <span className="line-height">Herringbone..</span>
      </SwiperSlide>
    </Swiper>
  );
};

export default SliderOne;
