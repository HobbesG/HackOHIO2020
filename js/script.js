

function script(){
    
    var mymap = L.map('mapid').setView([39.9612, -82.9988], 8);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        minZoom: 2,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiemFjaGZiIiwiYSI6ImNraGd6bDAwaTA1Mm8ydXBpOHc2YXFpa2oifQ.ApIhHDnfpfXaG5uE9A3SSg'
    }).addTo(mymap);

    var circle = L.circle([39.9612, -82.9988], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50000
    }).addTo(mymap);

    var latlngs = [
        [45.51, -122.68],
        [37.77, -122.43],
        [34.04, -118.2]
    ];

    var polygon = L.polyline(latlngs, {color: 'red'}).addTo(mymap);
    
    // var geoCounties = JSON.parse('geoJson/gz_2010_us_050_00_500k.json');
    // var countiesArray = [];
    // countiesArray = geoCounties.countiesArray;

    L.geoJson(statesData).addTo(map);
    
  
}
