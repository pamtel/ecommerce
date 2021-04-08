// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from '../assests/img/item6.png';
import product2 from '../assests/img/item8.png';
import product3 from '../assests/img/item7.png';
import product4 from '../assests/img/item8.png';
import product5 from '../assests/img/item9.png';
import product6 from '../assests/img/item10.png'
import product7 from '../assests/img/item11.png'


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  

const SliderOne = () => {
    return (
        <Swiper
        spaceBetween={10}
      slidesPerView={7}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
                <img className=""  src={product1} alt="product"/>
                {/* <p >Holiday Print</p>
                <p className="line-height">Flannel Sheet Set..</p> */}
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product2} alt="product"/>
        </SwiperSlide>

        <SwiperSlide>
              <img className=""  src={product5} alt="product"/>
        </SwiperSlide>

        <SwiperSlide>
          <img className=""  src={product3} alt="product"/>
          </SwiperSlide>

          <SwiperSlide>
          <img className=""  src={product6} alt="product"/>
          </SwiperSlide>

          <SwiperSlide>
                <img className=""  src={product4} alt="product"/>
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product7} alt="product"/>
        </SwiperSlide>

        <SwiperSlide>
              <img className=""  src={product3} alt="product"/>
        </SwiperSlide>

        <SwiperSlide>
          <img className=""  src={product6} alt="product"/>
          </SwiperSlide>

          <SwiperSlide>
          <img className=""  src={product7} alt="product"/>
          </SwiperSlide>
        
      </Swiper>
    )
}

export default SliderOne
