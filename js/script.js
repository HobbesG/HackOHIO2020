function script(){
    
    var mymap = L.map('mapid').setView([40.4173, -82.9071], 8);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiemFjaGZiIiwiYSI6ImNraGd6bDAwaTA1Mm8ydXBpOHc2YXFpa2oifQ.ApIhHDnfpfXaG5uE9A3SSg'
    }).addTo(mymap);

    var circle = L.circle([40.4173, -82.9071], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 50000
    }).addTo(mymap);
  
}
