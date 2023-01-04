import { IRacer } from "../interfaces/iRacer";

//concrete
//concretion
class SolarCar implements IRacer{
    team: string;
    speed:number;

    constructor(team:string){
        this.team = team
        this.speed = 0;
    }
    
    accelerate(): void {
        this.speed += 1
    }

    isFuelEmpty(): boolean {
        return false;
    }
}

export { SolarCar }