// Race Registration System
// Author: Lucas Faria
// Date: June 6, 2025
// Description: Assigns race numbers based on age and registration status

let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);

let earlyRegistree = true; // can be true or false

let runnerAge = 21; // example age (12, 18, 21)

if (runnerAge > 18){
  raceNumber += 1000
  //console.log(raceNumber);
}

if (earlyRegistree === true && runnerAge > 18){
  console.log(`You will race at 9:30 am. Your race number is ${raceNumber}`);
} else if (runnerAge > 18 && earlyRegistree === false){
  console.log(`You will race at 11:00 am. Your race number is ${raceNumber}`);
}else if (runnerAge === 18){
  console.log('come see the registration desk for more information');
}else {
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
}