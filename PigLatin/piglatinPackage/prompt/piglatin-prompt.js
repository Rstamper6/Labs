const promptly = require('promptly');
const main = require('../src/piglatin');

function prompt(){
    const validator = function (value) {
        if (value.length < 2) {
            throw new Error('Min length of 2');
        }
        return value;
    };
     
    (async () => {
        const name = await promptly.prompt('Enter word or phrase to translate: ', { validator });
        // Since retry is true by default, promptly will keep asking for a name until it is valid
        // Between each prompt, the error message from the validator will be printed
        console.log(`${name} translated is:`, main.translate(name));
    })();
}
prompt();
