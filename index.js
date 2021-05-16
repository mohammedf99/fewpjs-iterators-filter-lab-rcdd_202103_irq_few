// Code your solution here

function findMatching(arrOfDrivers, string) {
  
  return arrOfDrivers.toLowerCase().filter(driver => driver === string.toLowerCase());
  
}