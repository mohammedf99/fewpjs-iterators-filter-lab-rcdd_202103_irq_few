// Code your solution here

function findMatching(arrOfDrivers, name) {
  
  return arrOfDrivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  
}

function fuzzyMatch(arrOfDrivers, letter) {
  
  return arrOfDrivers.filer(driver => driver.charAt(0).toLowerCase() === letter);
  
}