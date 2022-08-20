// Code your solution in this file!

const  drivers=['Antonia', 'Nuru', 'Amari', 'Mo']
 const  returnFirstTwoDrivers= function(){
   return drivers.slice(0,2)
 }

 const  returnLastTwoDrivers= function(){
    return drivers.slice(2,4)
  }
 
 const selectingDrivers=  [returnFirstTwoDrivers,returnLastTwoDrivers]

 function createFareMultiplier(num){
  return function (fare){
    return fare*num
  }
  
 }
 const getFare=createFareMultiplier(2);
 function fareDoubler(fare){
    return getFare(fare)
 }
 const getFare2=createFareMultiplier(3);
 function fareTripler(fare){
    return getFare2(fare)
 }
 function selectDifferentDrivers(drivers, returnFirstTwoDrivers){
    return selectDifferentDrivers;
 }

