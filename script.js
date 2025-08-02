// Sử dụng OpenLayers để đọc file GeoJSON tĩnh
const vectorLayer = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'tp.hcm_phuongxa_processed.geojson', // Đường dẫn tương đối từ thư mục public
    format: new ol.format.GeoJSON()
  }),
  style: new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#ffcc33',
      width: 2
    }),
    fill: new ol.style.Fill({
      color: 'rgba(255, 204, 51, 0.2)'
    })
  })
});

const map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({ source: new ol.source.OSM() }),
    vectorLayer
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([106.7, 10.75]), // Ví dụ TP.HCM
    zoom: 11
  })
});
