for(let i = 100; i < 201; i++){
  //Check first if i is a multiple of 3 and 4
  if(i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  //Now check 3 or 4 individually
  }else if(i % 3 === 0){
    console.log("Loopy");
  }else if(i % 4 === 0){
    console.log("Lighthouse");
  //If divisible by neither, print number
  }else{
    console.log(i);
  }
}