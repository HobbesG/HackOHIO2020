function testStat(d, type){
    switch(type){
        case "crimeStat":
            var num = crimeStat(d)
            return num
        case "crimeRate":
            var num = crimeRate(d)
            return num
        case "climate":
            var num = crimeStat(d)
            return num
        case "weather":
            var num = crimeRate(d)
            return num
        case "countyTax":
            var num = crimeStat(d)
            return num
        case "voterHist":
            var num = crimeRate(d)
            return num
        case "popDens":
            var num = crimeRate(d)
            return num
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

