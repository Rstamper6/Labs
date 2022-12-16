import { Greeter } from "../greeter/greeter";
import { HtmlGreeter } from "../HTMLGreeter/HTMLGreeter";
import { JSGreeter } from "../JavaScriptGreeter/JSGreeter";
import { LoudGreeter } from "../LoudGreeter/LoudGreeter";



let greet1 = new Greeter("Hello")
let greet2 = new JSGreeter("Hello")
let greet3 = new LoudGreeter("Hello")
let greet4 = new HtmlGreeter("Hello", "")

const promptly = require('promptly');

(async () => {
    const name = await promptly.prompt('Name: ');

    console.log(greet1.greet(name));
    console.log(greet2.greet(name));

    const amt = await promptly.prompt('How many !s ?');
    greet3.addVolume(amt)
    
    console.log(greet3.greet(name));
    console.log(greet4.greet(name));
})();