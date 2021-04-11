// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import product1 from '../assests/img/item6.jpg';
import product2 from '../assests/img/item8.jpg';
import product3 from '../assests/img/item7.jpg';
import product4 from '../assests/img/item8.jpg';
import product5 from '../assests/img/item9.png';
import product6 from '../assests/img/item10.jpg';
import product7 from '../assests/img/item11.jpg';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  

const SliderOne = () => {
    return (
        <Swiper
        spaceBetween={10}
      slidesPerView={7}
      navigation
//       pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
                <img className=""  src={product1} alt="product"/>
                <span >Holiday Print</span><br></br>
                <span className="line-height">Flannel Sheet Set..</span>
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product2} alt="product"/>
                <span >Norbury</span><br></br>
                <span className="line-height">Scandinavian</span>
        </SwiperSlide>

        <SwiperSlide>
              <img className=""  src={product5} alt="product"/>
                <span >50" x 70" Jersey</span><br></br>
                <span className="line-height">Weighted Throw...</span>
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product3} alt="product"/>
                <span >Flannel</span><br></br>
                <span className="line-height">Herringbone..</span>
          </SwiperSlide>

          <SwiperSlide>
                <img className=""  src={product6} alt="product"/>
                <span >Heavyweight</span><br></br>
                <span className="line-height">blend Quilt..</span>
          </SwiperSlide>

          <SwiperSlide>
                <img className=""  src={product4} alt="product"/>
                <span >Holiday Print</span><br></br>
                <span className="line-height">Flannel Sheet Set..</span>
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product7} alt="product"/>
                <span >Norbury</span><br></br>
                <span className="line-height">Scandinavian</span>
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product3} alt="product"/>
                <span >Heavyweight</span><br></br>
                <span className="line-height">blend Quilt..</span>
        </SwiperSlide>

        <SwiperSlide>
                <img className=""  src={product6} alt="product"/>
                <span >50" x 70" Jersey</span><br></br>
                <span className="line-height">Weighted Throw...</span>
          </SwiperSlide>

          <SwiperSlide>
                 <img className=""  src={product7} alt="product"/>
                <span>Flannel</span><br></br>
                <span className="line-height">Herringbone..</span>
          </SwiperSlide>
        
      </Swiper>
    )
}

export default SliderOne
