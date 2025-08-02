// Tạo biến toàn cục
let vectorLayer, map;

// Load dữ liệu GeoJSON
fetch('data/tp.hcm_phuongxa_processed.geojson')
  .then(res => res.json())
  .then(data => {
    const features = new ol.format.GeoJSON().readFeatures(data, {
      featureProjection: 'EPSG:3857'
    });

    const source = new ol.source.Vector({
      features: features
    });

    vectorLayer = new ol.layer.Vector({
      source: source,
      style: new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: '#ff6600',
          width: 2
        }),
        fill: new ol.style.Fill({
          color: 'rgba(255, 165, 0, 0.2)'
        })
      })
    });

    map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({ source: new ol.source.OSM() }),
        vectorLayer
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([106.7, 10.75]),
        zoom: 11
      })
    });

    // Hiển thị popup khi click
    map.on('singleclick', function (evt) {
      map.forEachFeatureAtPixel(evt.pixel, function (feature) {
        const props = feature.getProperties();
        const name = props.tenphuong || 'Không rõ';
        alert('Tên phường: ' + name);
      });
    });
  });

// Hàm lọc
function applyFilter() {
  const value = document.getElementById('filter').value.toLowerCase();
  if (!vectorLayer) return;

  vectorLayer.getSource().getFeatures().forEach(feature => {
    const name = (feature.get('tenphuong') || '').toLowerCase();
    feature.setStyle(
      name.includes(value)
        ? new ol.style.Style({
            stroke: new ol.style.Stroke({ color: '#4f46e5', width: 3 }),
            fill: new ol.style.Fill({ color: 'rgba(79, 70, 229, 0.3)' })
          })
        : null
    );
  });
}

// Hàm reset
function resetFilter() {
  document.getElementById('filter').value = '';
  if (!vectorLayer) return;

  vectorLayer.getSource().getFeatures().forEach(feature => {
    feature.setStyle(
      new ol.style.Style({
        stroke: new ol.style.Stroke({ color: '#ff6600', width: 2 }),
        fill: new ol.style.Fill({ color: 'rgba(255, 165, 0, 0.2)' })
      })
    );
  });
}