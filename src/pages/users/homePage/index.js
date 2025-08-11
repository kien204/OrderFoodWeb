import { memo } from 'react';
import Banner from '../../../compenent/banner';
import ProductList  from '../../../compenent/productlist';    
import '../homePage/style.scss'; // Assuming you have a style file for the HomePage component

const HomePage = () => {

  return (
    <>
      <div className='container'>
        <div className='row-main'>
          <div className='col-xl-12'>
            <Banner /> 
            <ProductList categoryID={3}/>
            <ProductList categoryID={1}/>
          </div>
        </div>
      </div>
    </>
  );

}

export default memo(HomePage);
