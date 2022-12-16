import {Greeter} from "../greeter/greeter"

class JSGreeter extends Greeter{
    greet(name: string): string {
        return `console.log(${this.greeting}, ${name}!)`
    }
}

export {JSGreeter};