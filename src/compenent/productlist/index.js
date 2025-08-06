// src/components/ProductCarousel.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import '../productlist/style.scss';
import anh from '../../assets/anh2.jpg';
import { Link } from 'react-router-dom';

const ProductSlider = () => {

  const [productList, setProductList] = useState([]); 

  useEffect(() => {
    fetch('/mock/products.json')
      .then(response => response.json())
      .then(data => {
        setProductList(data);
      })
      .catch(error => console.error('Error fetching product data:', error));
  }, []);  

  return (
  <div className="product-slider">
    <div className="product-slider__header">
      <h3>Sản phẩm khuyến mãi</h3>
    </div>

      <Swiper
        watchSlidesProgress={true} 
        slidesPerView={6}
        slidesPerGroup={6}
        spaceBetween={5}
        grid={{ rows: 2, fill: 'row' }}
        navigation
        modules={[Grid, Navigation]}
        className="product-slider__swiper"
        breakpoints={{
          0: { // tương ứng $WIDE_MOBILE
            slidesPerView: 2,
            slidesPerGroup: 2,
            grid: { rows: 2 },
          },
          576: { // tương ứng $SMALL_DEVICES
            slidesPerView: 3,
            slidesPerGroup: 3,
            grid: { rows: 2 },
          },
          768: { // tương ứng $TABLET_DEVICE
            slidesPerView: 4,
            slidesPerGroup: 4,
            grid: { rows: 2 },
          },
          992: { // tương ứng $MEDIUM_DEVICE
            slidesPerView: 5,
            slidesPerGroup: 5,
            grid: { rows: 2 },
          },
          1200: { // tương ứng $DESKTOP
            slidesPerView: 6,
            slidesPerGroup: 6,
            grid: { rows: 2 },
          },
        }}
          >
          {productList?.map((products, index) => (
            <SwiperSlide key={index}>
                <div className="product-card">
                  <Link to={`/san-pham/${products.slug}`} >
                    <div className="product-card__image">
                      <img src={anh} alt={products.name} />
                    </div>
                    <div className="product-card__info">
                      <div className="product-card__name">{products.name}</div>
                      <div className="product-card__price">
                        {products.sale_price !== 0 ? (
                          <>
                            <h3 className="product-card__price-price">
                              {products.sale_price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </h3>
                            <span className="product-card__sale-price">
                              {products.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                            </span>
                            <span className="product-card__sale-discount">
                              -{Math.round(((products.price - products.sale_price) / products.price) * 100)}%
                            </span>
                          </>
                        ) : (
                          <h3 className="product-card__price-price">
                            {products.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                          </h3>
                        )}
                      </div>
                    </div>
                  </Link>
                  <button className="product-card__add-to-cart">Thêm vào giỏ hàng</button>
                </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="product-slider__bottom"><Link to="/san-pham/do-uong" className="product-slider__see-all">Xem tất cả &gt;</Link></div>
    </div>
  );
};

export default ProductSlider;