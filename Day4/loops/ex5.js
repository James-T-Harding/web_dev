date = new Date();
day = date.getDay();

var dayTitle;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        dayTitle = "Weekday"
        break;
    case 6:
        dayTitle = "Saturday"
        break;
    case 0:
        dayTitle = "Sunday"
        break;
}

console.log(dayTitle)