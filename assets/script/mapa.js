
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhaTEzMDciLCJhIjoiY2pyMHdiMHA4MHRzdDQ0bzBiZnBpNmZhdyJ9.gzKiqAYq2aZCh8mVFLDKMg';
    var map = new mapboxgl.Map({
    container: 'entrega',
    style: 'mapbox://styles/isai1307/cjr12bqic5okw2srsci926vve',
    center: [-101.243950, 22.832800],
    zoom: 2
    });
        
    map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl

}));

mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhaTEzMDciLCJhIjoiY2pyMHdiMHA4MHRzdDQ0bzBiZnBpNmZhdyJ9.gzKiqAYq2aZCh8mVFLDKMg';
    var map = new mapboxgl.Map({
    container: 'devolucion',
    style: 'mapbox://styles/isai1307/cjr12bqic5okw2srsci926vve',
    center: [-101.243950, 22.832800],
    zoom: 2
    });
        
    map.addControl(new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl

}));

