function getDayName(dayNumber) {
    switch(dayNumber) {
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
        default: return "Invalid day number";
    }
}

console.log(getDayName(3)); 
console.log(getDayName(8)); 
function printOneToTen() {
    let i = 1;
    while(i <= 10) {
        console.log(i);
        i++;
    }
}

printOneToTen();

function printTenToOne() {
    let i = 10;
    do {
        console.log(i);
        i--;
    } while(i >= 1);
}

printTenToOne();