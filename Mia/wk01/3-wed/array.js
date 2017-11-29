var daysOfTheWeek = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
var a = daysOfTheWeek.pop(); //remove 'Sunday' from the array
console.log(a);
daysOfTheWeek.unshift(a); //put 'sunday' at the beginning of array
console.log(daysOfTheWeek);

var weekend =[];               // push 'Sunday' and 'Saturday' to weekend variable
weekend.push(daysOfTheWeek[0]);
weekend.push(daysOfTheWeek[6]);

console.log(weekend);

var weekday = daysOfTheWeek.slice(1, 6); //slice 'Monday' to 'Friday' and assign to weekday variable

console.log(weekday);

var days = [];   
days.push(weekday);
days.push(weekend);


console.log(days);

days.pop();     // remove the 'weekend'

weekday.sort();   // sort 'weekday' alphabetically

console.log(weekday); 
