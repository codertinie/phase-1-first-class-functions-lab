// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = function(multiplier){
    return function (fare){
        return multiplier * fare;
    }
}

const fareDoubler = createFareMultiplier (2);

const fareTripler = createFareMultiplier (3);

const selectDifferentDrivers = function (drivers, any){
    return any(drivers);
}