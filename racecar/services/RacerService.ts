//service folders/files will hold all the functionality 
//business logic - calculating tax - alerting the user if they are over budget
//inner rules of your app

import { IRacer } from "../interfaces/iRacer";

function findRacersWithEmptyFuel(racers:IRacer[]) : IRacer[]{
    return racers.filter((r) => r.isFuelEmpty())
}

//DRY Dont Repeat Yourself
function findAverageSpeed(racer:IRacer[]) : number{
    let sum = 0;
    for(let i = 0; i < racer.length; i++){
        sum += racer[i].speed;
    }
    let avg = sum / racer.length
    return avg;
}

function getFasterRacer(racerA:IRacer, racerB:IRacer) : IRacer | null {
    if(racerA.speed > racerB.speed){
        return racerA
    }
    else if(racerA.speed < racerB.speed){
        return racerB
    }
    else{
        return null;
    }
}

export {findRacersWithEmptyFuel, findAverageSpeed, getFasterRacer}