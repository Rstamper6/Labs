//abstract
interface IRacer{
    team:string;
    speed:number;
    //interface does not know the implementaiton and does not know that code that goes inside. 
    accelerate() :void;
    isFuelEmpty() :boolean;

}

export {IRacer}