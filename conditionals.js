const raining = true;
const temparature = -1;

if(raining){
  console.log("Don't forget your umbrella!");
}
if(temparature < 0){
  console.log("Make sure you pick out a scarf!")
}else if(temparature < 15){
  console.log("Short sleeves won't cut it!");
}else{
  console.log("Short sleeves are fine.")
}
console.log("Now you're ready to go outside!");
