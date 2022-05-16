const finalPosition = function(movesArray){
  //Initialize position array, xy-coordinate format
  let position = [0,0];
  
  //When move is north/south, update y-coordinate. When east/west, update x-coordinate
  for(let move of movesArray){
    if(move === 'north'){
      position[1]++;
    } else if (move === 'south'){
      position[1]--;
    }else if(move === 'east'){
      position[0]++;
    }else{
      position[0]--;
    }
  }
  //return final position coordinates
  return position;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
finalPosition(moves);