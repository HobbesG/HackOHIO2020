function stat(d, type){
    switch(type){
        case crimeStat:
            return crimeStat(d)
        case crimeRate:
            return crimeRate(d)
        case climate:
            return crimeStat(d)
        case weather:
            return crimeRate(d)
        case countyTax:
            return crimeStat(d)
        case voterHist:
            return crimeRate(d)
        case popDens:
            return crimeRate(d)
        default:
            return undefined

    }

}
function crimeStat(d){
    for(var c in ohCrime2018.countiesName){
        
        if(d == ohCrime2018.countiesName[c].county){

            var motorTheft = ohCrime2018.countiesName[c].crime.motorVehicleTheft
            var propertyCrime = ohCrime2018.countiesName[c].crime.propertyCrime
            var robbery = ohCrime2018.countiesName[c].crime.robbery
            var burglary = ohCrime2018.countiesName[c].crime.burglary
            var larceny = ohCrime2018.countiesName[c].crime.larcenyTheft
            var stat = (motorTheft + robbery + burglary + larceny + propertyCrime)/50
        }
    }
    return stat
}

function crimeRate(d){
    for(var c in ohCrime2018.countiesName.length && ohCrime2019.countiesName.length){
        
    }
}

