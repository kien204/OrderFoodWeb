import React, { memo } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

const MasterLayout = ({ children, ...props}) => {
  return (
    <div {...props}>   
      <Header />
      <div style={{ backgroundColor: '#f5f5f5'}}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default memo(MasterLayout);
