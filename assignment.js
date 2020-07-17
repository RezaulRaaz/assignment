function feetToMile(feet) {
  const oneFeet = 0.000189394 //mile
  if (feet < 0) {
    return 'Feet cannot be nagative';
  }
  var totalMile = oneFeet * feet;
  return totalMile
}


function woodCalculator(chair, table, khat) {
  if(chair<0){
    return 'Enter Positive Value For Chair'
  }
  if(table<0){
    return 'Enter Positive Value For table'
  }
  if(khat<0){
    return 'Enter Positive Value For khat'
  }
  const oneChair = 1 //qfeet
  const oneTable = 3  //qfeet
  const oneKhat = 5 //qfeet
  var totalFeetForChair = oneChair * chair;
  var totalFeetForTable = oneTable * table;
  var totalFeetForKhat = oneKhat * khat;
  var totalfeet = totalFeetForChair + totalFeetForTable + totalFeetForKhat;
  return totalfeet;
}


function brickCalculator(floor) {

  const oneFeet = 1000; //brick

  const firstTenFloor = 15 * 1000; //brick
  const totalTenFloor = 10 * 15 * 1000;  //brick

  const elevenToTwintityFloor = 12 * 1000; //brick
  const totalElevenToTwintyFloor = 12 * 1000 * 10;

  const totalOneToTwintyFloor = totalTenFloor + totalElevenToTwintyFloor;

  const twintyToUpperFloor = 10 * 1000; //brick

  var totalBrick;
  if (floor < 0) {
    return 'value cannot be negative';
  } else if (floor <= 10) {
    return totalBrick = firstTenFloor * floor;
  } else if (10 < floor && floor <= 20) {
    var elevntotwinty = floor - 10
    var ta = elevenToTwintityFloor * elevntotwinty;
    return totalBrick = totalTenFloor + ta
  } else {
    var upToTwinty = floor - 20
    var totalTwintityToUperFloor = twintyToUpperFloor * upToTwinty;
    return totalBrick = totalOneToTwintyFloor + totalTwintityToUperFloor;
  }
}

function tinyFriend(friend) {
  if(friend==''){
   return "You don't have any friend";
  }else{
    var chiknaBondu=friend[0];
    var i = 0;
    while (i < friend.length) {
      var currentfriend=friend[i]
        if(currentfriend.length < chiknaBondu.length){
          chiknaBondu=currentfriend
        }
      i++
    }
   return chiknaBondu;
  }

}
