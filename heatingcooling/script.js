let actualTemp = 65; 
let desiredTemp = 65;

if (actualTemp === desiredTemp){
    console.log ('Standby')
}
else if (actualTemp > desiredTemp){
    console.log ('Run A/C')
}
else {
    console.log ('Run Heat')
}

// C to F conversion
let tempCelsius = 15;
let targetUnit = "F";

switch (tempCelsius){
    case tempCelsius:
        console.log ((9/5 * tempCelsius) + 32 + targetUnit);
}