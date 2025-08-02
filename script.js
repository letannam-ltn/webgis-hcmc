source: new ol.source.TileWMS({
  url: 'https://0850a0cc80f9.ngrok-free.app/geoserver/webgis_hcmc/wms',
  params: {
    'LAYERS': 'webgis_hcmc:tp.hcm_phuongxa', // thay bằng tên lớp bạn đang dùng
    'TILED': true
  },
  serverType: 'geoserver'
})

