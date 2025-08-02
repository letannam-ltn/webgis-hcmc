document.addEventListener('DOMContentLoaded', function () {
  // Hiển thị bản đồ với dữ liệu đã cấu hình sẵn từ các input ẩn
  if (typeof OpenLayers3Map !== 'undefined') {
    OpenLayers3Map.load();
  } else {
    console.error('Không tìm thấy OpenLayers3Map. Kiểm tra đường dẫn tới OpenLayers3Map.js.');
  }
});
