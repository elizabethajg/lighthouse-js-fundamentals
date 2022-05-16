const ageCalculator = function(name, yearOfBirth, currentYear){
  //Concatenate name and current age into string
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2022));
console.log(ageCalculator("Ferdinand", 1988, 2022));
console.log(ageCalculator("Suzie", 1984, 2016));
