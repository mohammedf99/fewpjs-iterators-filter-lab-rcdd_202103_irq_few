// Code your solution here

function findMatching(arrOfDrivers, string) {
  
  return arrOfDrivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
  
}