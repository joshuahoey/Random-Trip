'use strict';
const colors = [ 'blue', 'yellow', 'orange', 'red' ];
const randIndex = Math.floor(Math.random() * colors.length);

console.log(colors[randIndex]);

//random destination
function destination(placesArr){
    let randomPlace =  Math.floor(Math.random() * placesArr.length);
    return placesArr[randomPlace];
}
let randomDestination = destination(["Boston", "NYC", "Chicago", "Houston", "San Fransisco", "DC", "Tampa Bay"])
console.log(randomDestination);

//random restaurant
function restaurant(foodArr){
    let randomRestaurant = Math.floor(Math.random() * foodArr.length);
    return foodArr[randomRestaurant];
}
let randomFood = restaurant(["5 Star", "Pizza", "Seafood", "Spicy", "Ramen", "Italian",])
console.log(randomFood);

//random transportation
function transportation(transArr){
    let randomTransportation = Math.floor(Math.random() * transArr.length);
    return transArr[randomTransportation];
}
let randomTransport = transportation(["Car", "Bus", "Bike", "Train", "Bike"])
console.log(randomTransport);

//random entertainment
function entertainment(funArr){
    let randomFun = Math.floor(Math.random() * funArr.length);
    return funArr[randomFun];
}
let randomEntertainment = entertainment(["Concert", "Movie", "Hike", "Bar Hopping"])
console.log(randomEntertainment);

//Display Trip in the Console
console.log(randomDestination, randomFood, randomTransport, randomEntertainment);
 
//Function that prompts user if they like the trip
//if yes then console.log trip
//else generate new trip

let completeQuestion;
completeQuestion = prompt("Do you like the trip planned Yes or No?");

    if(completeQuestion === "No"){
        window.location.reload(true);
    } else if(completeQuestion === "Yes"){
        stop;
    }
