const chooseStations = function(stationsArray){
  //Empty array to hold eligible voting stations
  let goodStations = [];
  //Iterate through array list, if population val is at least 20  and is a community centre or school add title to goodStations array
  for (let station of stationsArray){
    if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){
      goodStations.push(station[0]);
    }
  }
  return goodStations;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];