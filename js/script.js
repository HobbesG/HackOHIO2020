

function script(){
    
    var map = L.map('mapid').setView([39.9612, -82.9988], 8);
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
        fillColor: getColor(feature.properties.NAME),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.5
    };
}
function mapZoom(){
    if(map.getZoom() > 7){
        return counties
    }
    else{
        return statesData
    }

}

var geoJSON = L.geoJson(mapZoom(), {style: style}).addTo(map);
map.removeLayer(geoJSON);
    
function getColor(d) {
    for(var c in ohCrime2018.countiesName){
        
        if(d == ohCrime2018.countiesName[c].county){
            var crime = ohCrime2018.countiesName[c].crime
            var motorTheft = crime.motorVehicleTheft
            var robbery = crime.robbery
            var burglary = crime.burglary
            var larceny = crime.larceny
            var stat = (motorTheft + robbery + burglary + larceny)/4
            
        }
    }

    var color;
    if(stat >100){
        color = 'red';
    }
    else if(stat == undefined){
        color = 'white`';
    }
    else{
        color = 'blue';
    }
    return color;
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
        '<b>State:'+ property.STATE + '</b> <br />'+
        '<b> County: ' + property.NAME + '</b><br />' 
        : 'Hover over a state');
    }
    else{
        this._div.innerHTML = '<h4>Information</h4>' +  (property ?
            '<b>State:'+ property.NAME + '</b> <br />'
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
