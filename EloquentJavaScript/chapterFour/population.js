let obj2 = {
    name : "America",
    population : 60,
    temp : 10,
    currency : "Dollar" 
}

let obj3 = {
    name : "Nigeria",
    population : 100,
    temp : 10,
    currency : "Naira" 
}

let obj4 = {
    name : "Canada",
    population : 100,
    temp : 10,
    currency : "Canadian Dollar" 
}

let obj5 = {
    name : "Egypt",
    population : 160,
    temp : 10,
    currency : "Egyptian currency" 
}

let obj6 = {
    name : "France",
    population : 140,
    temp : 60,
    currency : "France currency" 
}

let obj7 = {
    name : "Gambia",
    population : 20,
    temp : 35,
    currency : "Gambia currency" 
}

let obj8 = {
    name : "Ghana",
    population : 260,
    temp : 20,
    currency : "Ghana currency" 
}

let obj9 = {
    name : "China",
    population : 100,
    temp : 90,
    currency : "Naira" 
}

let obj10 = {
    name : "Russia",
    population : 100,
    temp : 10,
    currency : "Canadian Dollar" 
}

let populations = [[],[],[]];
populations[0][0] = null;
populations[0][1] = obj2;
populations[0][2] = obj3;
populations[0][3] = obj4;
populations[1][0] = obj5;
populations[1][1] = obj6;
populations[1][2] = obj7;
populations[1][3] = null;
populations[2][0] = obj8;
populations[2][1] = null;
populations[2][2] = obj9;
populations[2][3] = obj10;
//console.log(populations);

let total_population = 0;
for(const value of populations){
    for(const index in value){
        if(value[index] != null){
            total_population += value[index].population;
        }
    }
}
console.log(total_population);