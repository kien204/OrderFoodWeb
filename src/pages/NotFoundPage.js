import { memo } from 'react';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>404 - Không tìm thấy trang</h1>
      <p>Trang bạn tìm không tồn tại.</p>
    </div>
  );
};

export default memo(NotFoundPage);
