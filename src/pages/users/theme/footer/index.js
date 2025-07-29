import React, { memo } from 'react';
import './style.scss';
import logo from '../../../../assets/logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin,
        AiOutlinePhone, AiOutlineMail, AiOutlineHome  
  } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";



const Footer = () => {
  return (
    <> 
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <img src={logo} alt="Logo" className="logo"/>
              <p className="footer__desc">
                CookSmart – Giải pháp nấu ăn thông minh, nguyên liệu sạch, công thức đơn giản mỗi ngày.
              </p>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <h4 className="footer__title">Điều hướng</h4>
              <ul className="footer__list">
                <li><Link to="/">Trang chủ</Link></li>
                <li><Link to="/products">Sản phẩm</Link></li>
                <li><Link to="/recipes">Công thức</Link></li>
                <li><Link to="/blog">Bài viết</Link></li>
                <li><Link to="/contact">Liên hệ</Link></li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <h4 className="footer__title">Hỗ trợ</h4>
              <ul className="footer__list">
                <li><Link to="/help">Hướng dẫn đặt hàng</Link></li>
                <li><Link to="/policy">Chính sách giao hàng</Link></li>
                <li><Link to="/returns">Đổi/trả hàng</Link></li>
                <li><Link to="/terms">Điều khoản</Link></li>
              </ul>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <h4 className="footer__title">Liên hệ</h4>
              <p> <AiOutlinePhone /> 0378565005</p>
              <p> <AiOutlineMail /> phamkien20122004@gmail.com</p>
              <p> <AiOutlineHome /> Bắc Từ Liêm, Hà Nội</p>
              <div className="footer__socials">
                <div><AiOutlineFacebook  /></div>              
                <div><AiOutlineInstagram  /></div>
                <div><AiOutlineLinkedin  /></div>
                <div><RiTwitterXFill  /></div>
              </div>
            </div>
          </div>

          <div className="footer__bottom">
            <p>© 2025 CookSmart. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Footer);
