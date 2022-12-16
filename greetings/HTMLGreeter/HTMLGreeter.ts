import { Greeter } from "../greeter/greeter";


class HtmlGreeter extends Greeter{
    tagName:string

    constructor(greeting:string, tagName:string){
        super(greeting)

        this.greeting = greeting
        this.tagName = tagName
    }

    greet(name: string): string {
        let tg : string = this.tagName.toLocaleLowerCase()
        let theGreet : string = ''
        if (this.tagName === 'div'){
            theGreet = `<div>${this.greeting}, ${name}!</div>`;
        }
        else if (tg == 'p'){
            theGreet = `<p>${this.greeting}, ${name}!</p>`;
        }
        else{
            theGreet = `<h1>${this.greeting}, ${name}!</h1>`
        }
        return theGreet;
        // return `<${this.tagName}>${this.greeting}, ${name}!</${this.tagName}>`
    }
}

export {HtmlGreeter};