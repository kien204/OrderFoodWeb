import React, { memo } from 'react';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the User Home Page</h1>
      <p>This is where users can find their dashboard and manage their profiles.</p>
    </div>
  );
}

export default memo(HomePage);
