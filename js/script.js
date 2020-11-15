function script(ID){
    var map = L.map('mapid').setView([39.9612, -82.9988], 7);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, geoJSON Data © <a href="https://www.census.gov/">US Census Bureau</a>',
        maxZoom: 18,
        minZoom: 4,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiemFjaGZiIiwiYSI6ImNraGd6bDAwaTA1Mm8ydXBpOHc2YXFpa2oifQ.ApIhHDnfpfXaG5uE9A3SSg'
    }).addTo(map);

function style(feature) {
    return {
        fillColor: getColor(feature.properties),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}

function mapZoom(){
    if(map.getZoom() > 6){
        return counties
    }
    else{
        return statesData
    }

}

var geoJSON = L.geoJson(mapZoom(), {style: style}).addTo(map);
map.removeLayer(geoJSON);
    
function getColor(d) {
    var type = statType(parseInt(ID))
    var stat = testStat(d.NAME,type)

    if(d.STATE != 39){
        stat = undefined
    }
    return stat == undefined ? 'black':
        stat > 60  ? '#FF4C48' :
        stat > 50  ? '#FFA25C' :
        stat > 40  ? '#FAA855' :
        stat > 30   ? '#FFFF85' :
        stat > 20   ? '#D2E164' :
        stat > 10   ? '#5EA62F' :
                      'white';
}

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};


info.update = function (property) {

    if(map.getZoom() > 6){
    this._div.innerHTML = '<h4>Information</h4>' +  (property ?
        '<b>State:'+ stateNum(parseInt(property.STATE)) + '</b> <br />'+
        '<b> County: ' + property.NAME + '</b><br />' 
        : 'Hover over a county');
    }
    else{
        this._div.innerHTML = '<h4>Information</h4>' +  (property ?
            '<b>State:'+ stateNum(parseInt(property.STATE)) + '</b> <br />'
            : 'Hover over a state');
    }
};

info.addTo(map);

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }

    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    var layer = e.target;
    geoJSON.resetStyle(layer);
    info.update();
  
}

function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer){
    //if(feature.properties && feature.properties.NAME){
    //    layer.bindPopup(feature.properties.NAME, {closeOnClick: false, autoClose: false});
    //}

    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });

    
}

var initialGeoJSON = L.geoJSON(mapZoom(), {
    style: style,
    onEachFeature: onEachFeature
    
}).addTo(map);

// Change geoJSON based on zoom
map.on('zoomend', function(e){
    map.removeLayer(geoJSON);
    map.removeLayer(initialGeoJSON);

   geoJSON = L.geoJSON(mapZoom(), {
        style: style,
        onEachFeature: onEachFeature
        
    }).addTo(map);

});

 
}
