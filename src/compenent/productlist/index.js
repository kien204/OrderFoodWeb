// src/components/ProductCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import '../productlist/style.scss';
import anh from '../../assets/anh1.jpg';

const products = [
  {
    id: 1,
    name: 'Sườn cốt lết',
    price: '58.500đ/500g',
    oldPrice: '72.000đ',
    discount: '-19%',
    remain: 61,
    image: '/images/sp1.jpg',
  },
  {
    id: 2,
    name: 'Cánh tỏi gà',
    price: '29.000đ/300g',
    oldPrice: '34.500đ',
    discount: '-16%',
    remain: 39,
    image: '/images/sp2.jpg',
  },
  {
    id: 3,
    name: 'Cá điêu hồng',
    price: '48.900đ/500g',
    oldPrice: '57.000đ',
    discount: '-14%',
    remain: 14,
    image: '/images/sp3.jpg',
  },
  {
    id: 4,
    name: 'Cải bẹ xanh',
    price: '5.000đ/300g',
    oldPrice: '11.000đ',
    discount: '-55%',
    remain: 25,
    image: '/images/sp4.jpg',
  },
  {
    id: 5,
    name: 'Dưa leo',
    price: '10.000đ/500g',
    oldPrice: '12.500đ',
    discount: '-20%',
    remain: 40,
    image: '/images/sp5.jpg',
  },
  {
    id: 6,
    name: 'Dưa lưới ruột cam',
    price: '50.700đ/1.3kg',
    oldPrice: '67.000đ',
    discount: '-25%',
    remain: 18,
    image: '/images/sp6.jpg',
  },
  {
    id: 7,
    name: 'Cải ngồng',
    price: '6.600đ/300g',
    oldPrice: '11.000đ',
    discount: '-40%',
    remain: 30,
    image: '/images/sp7.jpg',
  },
  {
    id: 8,
    name: 'Bầu sao 2 trái',
    price: '21.000đ/1kg',
    oldPrice: '25.000đ',
    discount: '-16%',
    remain: 20,
    image: '/images/sp8.jpg',
  },
  {
    id: 9,
    name: 'Trứng gà 10 quả',
    price: '30.000đ',
    oldPrice: '27.000đ/hộp',
    discount: 'Mới',
    remain: 50,
    image: '/images/sp9.jpg',
  },
  {
    id: 10,
    name: 'Chuối già Nam Mỹ',
    price: '19.530đ/700g',
    oldPrice: '23.240đ',
    discount: '-16%',
    remain: 22,
    image: '/images/sp10.jpg',
  },
  // 10 sản phẩm nữa lặp lại cho đủ 20
  {
    id: 11,
    name: 'Sườn cốt lết',
    price: '58.500đ/500g',
    oldPrice: '72.000đ',
    discount: '-19%',
    remain: 61,
    image: '/images/sp1.jpg',
  },
  {
    id: 12,
    name: 'Cánh tỏi gà',
    price: '29.000đ/300g',
    oldPrice: '34.500đ',
    discount: '-16%',
    remain: 39,
    image: '/images/sp2.jpg',
  },
  {
    id: 13,
    name: 'Cá điêu hồng',
    price: '48.900đ/500g',
    oldPrice: '57.000đ',
    discount: '-14%',
    remain: 14,
    image: '/images/sp3.jpg',
  },
  {
    id: 14,
    name: 'Cải bẹ xanh',
    price: '5.000đ/300g',
    oldPrice: '11.000đ',
    discount: '-55%',
    remain: 25,
    image: '/images/sp4.jpg',
  },
  {
    id: 15,
    name: 'Dưa leo',
    price: '10.000đ/500g',
    oldPrice: '12.500đ',
    discount: '-20%',
    remain: 40,
    image: '/images/sp5.jpg',
  },
  {
    id: 16,
    name: 'Dưa lưới ruột cam',
    price: '50.700đ/1.3kg',
    oldPrice: '67.000đ',
    discount: '-25%',
    remain: 18,
    image: '/images/sp6.jpg',
  },
  {
    id: 17,
    name: 'Cải ngồng',
    price: '6.600đ/300g',
    oldPrice: '11.000đ',
    discount: '-40%',
    remain: 30,
    image: '/images/sp7.jpg',
  },
  {
    id: 18,
    name: 'Bầu sao 2 trái',
    price: '21.000đ/1kg',
    oldPrice: '25.000đ',
    discount: '-16%',
    remain: 20,
    image: '/images/sp8.jpg',
  },
  {
    id: 19,
    name: 'Trứng gà 10 quả',
    price: '30.000đ',
    oldPrice: '27.000đ/hộp',
    discount: 'Mới',
    remain: 50,
    image: '/images/sp9.jpg',
  },
  {
    id: 20,
    name: 'Chuối già Nam Mỹ',
    price: '19.530đ/700g',
    oldPrice: '23.240đ',
    discount: '-16%',
    remain: 22,
    image: '/images/sp10.jpg',
  },
];

const ProductSlider = () => {
  return (
    <div className="product-slider">
      <div className="product-header banner">
        <h2>Sản phẩm khuyến mãi</h2>
        <a href="/tat-ca-san-pham" className="see-all">Xem tất cả &gt;</a>
      </div>

      <Swiper
        watchSlidesProgress={true} 
        slidesPerView={5}
        slidesPerGroup={6}
        spaceBetween={20}
        grid={{ rows: 2, fill: 'row' }}
        navigation
        modules={[Grid, Navigation]}
        className="mySwiper">

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 87</SwiperSlide>
        <SwiperSlide>Slide 96</SwiperSlide>
        <SwiperSlide>Slide 75</SwiperSlide>
        <SwiperSlide>Slide 84</SwiperSlide>
        <SwiperSlide>Slide 93</SwiperSlide>
        <SwiperSlide>Slide 72</SwiperSlide>
        <SwiperSlide>Slide 81</SwiperSlide>
        <SwiperSlide>Slide 9a</SwiperSlide>
      </Swiper>

      {/* <Swiper
        slidesPerView={5}
        slidesPerGroup={5}
        grid={{ rows: 2, fill: 'row' }}
        navigation
        modules={[Navigation, Grid]}
        className="swiper-wrapper"
      >
        {products.map((p) => (
          <SwiperSlide key={p.id}>
            <div className="product-card">
              <img src={p.image} alt={p.name} />
              <h3>{p.name}</h3>
              <div className="price-info">
                <span className="new-price">{p.price}</span>
                <span className="old-price">{p.oldPrice}</span>
                <span className="discount">{p.discount}</span>
              </div>
              <div className="remain">Còn {p.remain} suất</div>
              <button className="buy-btn" onClick={() => alert(`Mua ${p.name}`)}>MUA</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default ProductSlider;