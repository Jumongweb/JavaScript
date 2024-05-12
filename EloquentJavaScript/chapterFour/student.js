function studentScores(value){
        if (value >= 90){
            return "A";
        } else if(value >= 80){
            return "B";
        } else if(value >= 70){
            return "C";
        }  else if(value >= 60){
            return "D";
        }  else {
            return "F";
        }
}

function mapper(array){
    return array.map(num=> studentScores(num))
}

// console.log(studentScores([95,78,85,60,45,92]));
module.exports = mapper