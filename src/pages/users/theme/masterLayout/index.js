import React, { memo } from 'react';
import Header from '../header/index';
import Footer from '../footer/index';

const MasterLayout = ({ children, ...props}) => {
  return (
    <div {...props}>   
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default memo(MasterLayout);
