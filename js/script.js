

function script(){
    
    var map = L.map('mapid').setView([39.9612, -82.9988], 8);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        minZoom: 4,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiemFjaGZiIiwiYSI6ImNraGd6bDAwaTA1Mm8ydXBpOHc2YXFpa2oifQ.ApIhHDnfpfXaG5uE9A3SSg'
    }).addTo(map);

var geoJSON = L.geoJSON(counties, {style: style}).addTo(map);

function style(feature) {
    return {
        fillColor: getColor(feature.properties.STATE),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}
    
function getColor(d) {
    var color;
    if(d >25){
        color = 'red';
    }else{
        color = 'blue';
    }
    return color;
}
   

    
    
  
}
