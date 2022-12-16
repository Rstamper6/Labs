import { Greeter } from "../greeter/greeter";
import { HtmlGreeter } from "../HTMLGreeter/HTMLGreeter";
import { JSGreeter } from "../JavaScriptGreeter/JSGreeter";
import { LoudGreeter } from "../LoudGreeter/LoudGreeter";

let chalk = require('chalk')
const promptly = require('promptly');

(async () => {
    const color = await promptly.prompt('Color r, g, b?: ');
    const type = await promptly.prompt('Greet type: Normal, loud, HTML, JavaScript: ');
    const name = await promptly.prompt('name: ');

    if(type.toLowerCase() == "normal"){
        let greet1 = new Greeter("Hello")
        if (color == "g"){
            console.log(chalk.green(greet1.greet(name)));
        }
        else if (color == "b"){
            console.log(chalk.blue(greet1.greet(name)));
        }
        else {
            console.log(chalk.red(greet1.greet(name)));
        }
    }
    else if(type.toLowerCase() == "loud"){
        let greet2 = new LoudGreeter("Hello")
        const amt = await promptly.prompt('How many?');
        greet2.addVolume(amt)

        if (color == "g"){
            console.log(chalk.green(greet2.greet(name)));
        }
        else if (color == "b"){
            console.log(chalk.blue(greet2.greet(name)));
        }
        else {
            console.log(chalk.red(greet2.greet(name)));
        }
    }
    else if(type.toUpperCase() == "HTML"){
        const type = await promptly.prompt('HTML Tag Name: ');
        let greet3 = new HtmlGreeter("Hello", type)
        if (color == "g"){
            console.log(chalk.green(greet3.greet(name)));
        }
        else if (color == "b"){
            console.log(chalk.blue(greet3.greet(name)));
        }
        else {
            console.log(chalk.red(greet3.greet(name)));
        }
    }
    else if(type.toLowerCase() == "javascript"){
        let greet4 = new JSGreeter("Hello")
        if (color == "g"){
            console.log(chalk.green(greet4.greet(name)));
        }
        else if (color == "b"){
            console.log(chalk.blue(greet4.greet(name)));
        }
        else {
            console.log(chalk.red(greet4.greet(name)));
        }
    }

})();