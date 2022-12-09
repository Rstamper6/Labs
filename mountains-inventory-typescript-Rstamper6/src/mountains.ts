//boolean number string bigint symbol null undefined

let fullName:string = "Riley Stamper";

//object are a way of grouping data together
interface Mountain{
    name:string,
    height:number,
    hasBeenClimbed?:boolean
}

let newMountain:Mountain = {
    name: "Kilimanjaro",
    height: 10000
}

let mountains:Mountain[] = [
    {name:"kilimanjaro", height: 19342},
    {name:"everest", height: 29029},
    {name:"denali", height: 20310},
]

//function signature - what does it take in and what does it return
function findnameOfTallestMountain (mountains:Mountain[]): string {
    let result:string = ""
    let newHeight:number = 0
    for(let item of mountains){
        if(item.height > newHeight){
            newHeight = item.height
            result = item.name
        }
    }
    return result;
}
console.log(findnameOfTallestMountain(mountains));

let thisVariableCanBeAnything:any;
thisVariableCanBeAnything = 0;
thisVariableCanBeAnything = true;
thisVariableCanBeAnything = "Riley";

function calculate(a:number, b:number, c?:number){

}
calculate(1, 2)
calculate(1, 2, 3)

let stringOrNumber:string|number;
stringOrNumber = "Riley"
stringOrNumber = 0;
// 

export {findnameOfTallestMountain, Mountain}