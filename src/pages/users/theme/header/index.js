import React, { memo, useState, useEffect, Children } from 'react';
import '../header/style.scss';
import { IoIosSearch, IoIosNotificationsOutline , IoIosHelpCircleOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useLocation  } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { ROUTER } from '../../../../utils/router';


const Header = () => {

  const location = useLocation(); 
  const [categoryGroup, setCategoryGroup] = useState(null);
  const [categorys, setCategory] = useState(null);

  useEffect(() => {

      async function loadData() {
        fetch('/mock/category_groups.json')
        .then(response => response.json())
        .then(data => {
          setCategoryGroup(data);
        })
        .catch(error => console.error('Error fetching product data:', error));

        fetch('/mock/categorys.json')
        .then(response => response.json())
        .then(data => {
          setCategory(data);
        })
        .catch(error => console.error('Error fetching product data:', error));

        console.log(categorys, categoryGroup);
      }

      loadData();
    }, []);

  const [menu] = useState([
    { name: 'Trang chủ', path:  ROUTER.USER.HOME },
    { name: 'Sản phẩm', path: ROUTER.USER.PRODUCT },
    { name: 'Công thức', path: ROUTER.USER.RECIPE },
    { name: 'Bài viết', path: ROUTER.USER.BLOG },
    { name: 'Liên hệ', path: ROUTER.USER.CONTACT },
  ]);

  const [notifim, setNotifi] = useState([
    { message: "Đơn hàng #1234 đã được xác nhận", read: false },
    { message: "Bạn có 1 ưu đãi mới", read: false },
    { message: "Đánh giá sản phẩm đã mua để nhận thưởng", read: false },
    { message: "Hệ thống bảo trì vào lúc 23:00", read: false },
    { message: "Bạn đã đổi mật khẩu thành công", read: true },
    { message: "Đơn hàng #5678 đang được giao", read: true },
  ]);

  return (
    <> 
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <span className="header-top__text">🎉 Ưu đãi mỗi ngày – Miễn phí giao hàng đơn từ 200K!</span>
            </div>
            <div className="col-xl-6">
              <div className="header-top__right">
                <ul className='menu'>
                  <li className='notification_item'>
                    <Link to=""><IoIosNotificationsOutline  /> <span> Thông báo</span></Link>
                    {notifim?.length > 0 && (
                      <div className="notification_dropdown">
                        <span className="notification_text">Thông báo mới</span>
                        <ul>
                          {notifim.slice(0, 5).map((item, index) => (
                            <li key={index} className={item.read ? 'read' : 'unread'}>
                              <Link to={item.link}>{item.message}</Link>
                            </li>
                          ))}
                        </ul>
                        <span className="view_all">
                          <Link to="">Xem tất cả</Link>
                        </span>
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to=""><IoIosHelpCircleOutline /> <span> Hỗ trợ</span></Link>
                  </li>
                  <li>
                    <Link to=""><CiUser /> <span> Đăng nhập</span></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> 
                    
      <div className='header-main'>
        <div className="container">  
          <div className="row"> 
            <div className="col-xl-2">
              <div className="header-main__logo">
                <Link to="/">
                  <img src={logo} alt="Logo" className='logo'/>
                </Link>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="header-main__menu">
                <ul className='menu'>
                {
                  menu?.map((item, index) => (
                    <li key={index} className={location.pathname === item.path ? 'active' : ''}>
                      <Link to={item?.path}>{item.name}</Link>
                    </li>
                  ))
                }
                </ul>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="header-main__actions">
                <div className="header-main__search">
                  <form>
                    <input type="text" placeholder="Tìm kiếm ..." />
                    <IoIosSearch />
                  </form>
                </div>
                <div className="header-main__cart">
                  <Link to="">
                    <AiOutlineShoppingCart />
                    <span className="header-main__cart-count">0</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
