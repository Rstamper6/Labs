import { Greeter } from "../../greeter/greeter";
import { HtmlGreeter } from "../../HTMLGreeter/HTMLGreeter";
import { JSGreeter } from "../../JavaScriptGreeter/JSGreeter";
import { LoudGreeter } from "../../LoudGreeter/LoudGreeter";

describe("greeter tests", ()=>{
    test("Should return Hello, Riley!", ()=>{
        const greeter = new Greeter("Hello")
        expect(greeter.greet("Riley")).toBe("Hello, Riley!")
    })
})

describe("JavaScript greeter tests", ()=>{
    test("Should return console.log('Hello, Riley!')", ()=>{
        const greeter = new JSGreeter("Hello")
        expect(greeter.greet("Riley")).toBe("console.log(Hello, Riley!)")
    })
})

describe("Loud greeter tests", ()=>{
    test("Should return Hello, Riley!!!!", ()=>{
        let greeter = new LoudGreeter("Hello")
        expect(greeter.greet("Riley")).toBe("Hello, Riley!!")
        greeter.addVolume(4)
        expect(greeter.greet("Riley")).toBe("Hello, Riley!!!!!!")
    })
})

describe("HTML greeter tests", ()=>{
    test("Should return console.log <div>Hello, Riley!</div>", ()=>{
        const greeter = new HtmlGreeter("Hello", "h1")
        expect(greeter.greet("Riley")).toBe("<div>Hello, Riley!</div>")
    })
    test("Should return console.log <p>Hello, Riley!</p>", ()=>{
        const greeter = new HtmlGreeter("Hello", "p")
        expect(greeter.greet("Tom")).toBe("<p>Hello, Tom!</p>")
    })
    test("Should return console.log <h1>Hello, Riley!</h1>", ()=>{
        const greeter = new HtmlGreeter("Hello", "")
        expect(greeter.greet("Jimmy")).toBe("<h1>Hello, Jimmy!</h1>")
    })
})