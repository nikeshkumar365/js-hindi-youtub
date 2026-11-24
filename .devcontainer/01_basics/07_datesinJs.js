// Dates

let MyDate = new Date()
//console.log(MyDate.toString());
//console.log(MyDate.toDateString());
//console.log(MyDate.toLocaleDateString());
//console.log(typeof MyDate);

//let myCreateDate = new Date(2026, 11, 24)
//let myCreateDate = new Date(2026, 0, 11, 4, 5)
let myCreateDate = new Date("11-10-2026")
//console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})