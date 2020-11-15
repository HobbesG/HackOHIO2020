function statType(type){

    switch(type){
        case 1:
            return "crimeStat"
        case 2:
            return "crimeRate"
        case 3:
            return "climate"
        case 4:
            return "weather"
        case 5:
            return "countyTax"
        case 6:
            return "voterHist"
        case 7:
            return "popDens"
        default:
            return "undefined"
    }


}