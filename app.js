// Rover Object Goes Here
// ======================
const marsRover = {
  direction: "N",
  x: 0,
  y:0,
  travelLog:[],
  getCoordinates: function(){
    return (`${this.x},${this.y}`)
  }
}
// ======================
function turnLeft(rover) {
  console.log("turnLeft was called!");
  const currentDirection= marsRover.direction;
  switch (currentDirection){
    case "N":
      marsRover.direction = "W";
      break;
    case "W":
      marsRover.direction = "S";
      break;
    case "E":
      marsRover.direction = "N";
      break;
    case "S":
      marsRover.direction = "E";
      break;
  }
}
function turnRight(rover) {
  console.log("turnRight was called!");
  const currentDirection = marsRover.direction;
  switch (currentDirection) {
    case "N":
      marsRover.direction = "E";
      break;
    case "W":
      marsRover.direction = "N";
      break;
    case "E":
      marsRover.direction = "S";
      break;
    case "S":
      marsRover.direction = "W";
      break;
  }
}

function moveForward(rover) {
  console.log("moveForward was called")
  const currentDirection = marsRover.direction;
  switch (currentDirection) {
    case "N":
      marsRover.y+= -1;
      break;
    case "W":
     marsRover.x+= -1;
      break;
    case "E":
      marsRover.x+=1;
      break;
    case "S":
      marsRover.y+= 1;
      break;
}
console.log(marsRover.getCoordinates())
marsRover.travelLog.push(marsRover.getCoordinates())
}

function command (movement){
  for (let i = 0; i < movement.length; i++){
    const currentCharacter = movement[i];
    switch (currentCharacter){
    case "l":
      turnLeft();
      break;
    case "r":
      turnRight();
      break;
    case "f":
      moveForward();
      break;
  }
}
console.log(marsRover.travelLog)
}
command('rffrfflfrff')


