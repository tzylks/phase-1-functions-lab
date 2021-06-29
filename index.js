// Code your solution in this file!
const address = 42
const feet = 264
function distanceFromHqInBlocks(destination){
  if (destination >= 42) {
      return destination - address;
}
  else if (destination <= 42) {
      return address - destination;
    }
 }

 function distanceFromHqInFeet (someValue) {
    return distanceFromHqInBlocks(someValue) * feet;
  } 

  function distanceTravelledInFeet(start, end) {
      let blocksTrav = Math.abs(start - end);
      return blocksTrav * feet;
  }

  function calculatesFarePrice(start, end) {
    const distTravel = distanceTravelledInFeet(start, end);
    if (distTravel > 400 && distTravel < 2000){
            return (distTravel - 400) * 2 / 100;
    } else if (distTravel > 2000 && distTravel< 2500) {
        return 25;
    } else if (distTravel < 400) {
        return 0;
    } else if (distTravel > 2500) {
        return "cannot travel that far";
    }
  }