import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './style.scss'; 
import anh from '../../assets/anh1.jpg';


const Banner = () => {
  const banners = [
     { id: 1, image: anh, alt: 'Khuyến mãi 1' },
    { id: 2, image: anh, alt: 'Món mới hấp dẫn' },
    { id: 3, image: anh, alt: 'Nguyên liệu sạch' },
  ];

  return (
    <div className="banner">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {banners?.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt={item.alt} className="banner-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
