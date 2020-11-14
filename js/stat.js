function stat(){

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

}