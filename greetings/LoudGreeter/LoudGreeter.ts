import { Greeter } from "../greeter/greeter";

class LoudGreeter extends Greeter{
    private extra:string;
    
    constructor(greeting:string){
        super(greeting);

        this.greeting = greeting;
        this.extra = '' 
    }
    
    addVolume(amt:number): void{
        let em = ''
        let ex = '!'
        for(let i = 0; i < amt; i++){
            em += ex;
        }
        this.extra += em 
    }

    greet(name: string): string {
        return `${this.greeting}, ${name}${this.extra}!!`
    }
}

export {LoudGreeter}