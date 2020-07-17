

function feetToMile(feet) {
  const oneFeet = 0.000189394 //mile
  if (feet < 0) {
    return 'Feet cannot be nagative';
  }
  var totalMile = oneFeet * feet;
  return totalMile
}



function woodCalculator(chair, table, khat) {
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
  const totalTenFloor = 10 * 15 * 1000;

  const elevenToTwintityFloor = 12 * 1000; //brick
  const totalElevenToTwintityFloor = 12 * 1000 * 10;

  const totalTwintyFloor = totalTenFloor + totalElevenToTwintityFloor;

  const trwintityToUpperFloor = 10 * 1000; //brick

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
    var ta = trwintityToUpperFloor * upToTwinty;
    return totalBrick = totalTwintyFloor + ta;
  }
}

function tinyFriend(friend) {
  var tinyfrn=friend[0];
  var i = 0;
  while (i < friend.length) {
    var currentfrn=friend[i]
      if(currentfrn.length < tinyfrn.length){
          tinyfrn=currentfrn
      }
    i++
  }
  console.log(tinyfrn)
}
console.log(tinyFriend(['raarrrz','rafd','dafasdfs','ra']))
