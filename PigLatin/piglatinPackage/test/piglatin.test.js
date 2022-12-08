const main = require('../src/piglatin');


describe("pig word latin tests", () => {
    test('starts with a', () =>{
        // let translated = main('apple');
        expect(main.translate("apple")).toBe("appleway")
    })
    test('starts with o', () =>{
        // let translated = main('orange');
        expect(main.translate("orange")).toBe("orangeway")
    })
    test('starts with u', () =>{
        // let translated = main('Umbrella');
        expect(main.translate("Umbrella")).toBe("Umbrellaway")
    })
    test('starts with B', () =>{
        // let translated = main('Breeze');
        expect(main.translate("Breeze")).toBe("eezeBray")
    })
    test('starts with t ends with e', () =>{
        // let translated = main('the');
        expect(main.translate("the")).toBe("ethay")
    })
    test('no vowels', () =>{
        // let translated = main('why');
        expect(main.translate("why")).toBe("whyay")
    })
    test('second letter is o', () =>{
        // let translated = main('your');
        expect(main.translate("your")).toBe("ouryay")
    })
    test('two vowels in a row', () =>{
        // let translated = main('your');
        expect(main.translate("dream")).toBe("eamdray")
    })
    test('two vowels in a row', () =>{
        // let translated = main('your');
        expect(main.translate("dream")).toBe("eamdray")
    })
})

describe ("Pig latin phrase tests", ()=>{
    test('phrase 1', () =>{
        // let translated = main('your');
        expect(main.translate("the apple is good")).toBe("ethay appleway isway oodgay")
    })
    test('phrase 2', () =>{
        // let translated = main('your');
        expect(main.translate("We can stay at your house")).toBe("eWay ancay aystay atway ouryay ousehay")
    })
    test('phrase 3', () =>{
        // let translated = main('your');
        expect(main.translate("The time is 1:00PM")).toBe("ethay imetay isway 1:00PM")
    })
    test('phrase 4', () =>{
        // let translated = main('your');
        expect(main.translate("My dream was crazy")).toBe("myay eamdray asway azycray")
    })
})