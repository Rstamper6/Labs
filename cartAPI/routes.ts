import { Router, Request, Response } from "express";
import { Item } from "./item";

//hard coded data
let itemArr:Item[] = [
    {id: 1, quantity:20, price: 10, product: "Eggs", isActive: true},
    {id: 2, quantity:5, price: 20, product: "Steak", isActive: true},
    {id: 3, quantity:15, price: 5, product: "Milk", isActive: true},
    {id: 4, quantity:100, price: 3, product: "Gum", isActive: true}
];

export const itemRouter = Router();

itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    if(req.query.maxPrice !== undefined){
        let underArray = itemArr.filter((x) => x.price <= Number(req.query.maxPrice) && x.isActive);
        return res.status(200).json(underArray);
    }
    //prefix is the parameter
    else if(req.query.prefix !== undefined){
        let startsWithArray = itemArr.filter((x) => x.product.startsWith(String(req.query.prefix)) && x.isActive);
        return res.status(200).json(startsWithArray);
    }
    else if(req.query.pageSize !== undefined){
        return res.status(200).json(itemArr.filter((x) => x.isActive).slice(0, Number(req.query.pageSize)));
    }
    else{
        return res.status(200).json(itemArr.filter((x) => x.isActive));
    }
    
});

//after params in arrow function matches parameter after .get
itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let itemIWantToFind = itemArr.find((x) => x.id === Number(req.params.id));
    
    if(itemIWantToFind === undefined){
        return res.status(404).send('ID Not Found')
    }
    else{
        return res.status(200).json(itemIWantToFind)
    }
})

itemRouter.post("/", async (req:Request, res:Response) : Promise<Response> =>{
    let newItem:Item = {
        id:GetNextId(),
        product: String(req.body.product),
        price: Number(req.body.price),
        quantity: Number(req.body.quantity),
        isActive: true
    }

    itemArr.push(newItem)

    return res.status(201).json(newItem);
});

itemRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    //find the item by the id
    let itemFound = itemArr.find((x) => x.id === Number(req.params.id));
    //update the properties of the item base on what is sent in the body

    if(itemFound !== undefined){
        itemFound.price = Number(req.body.price)
        itemFound.product = String(req.body.product)
        itemFound.quantity = Number(req.body.quantity)
        itemFound.isActive = Boolean(req.body.isActive)

        return res.status(200).json(itemFound)

    }
    else{
        return res.status(404).send('Hey I didnt find it bro')
    }


    //return a status of 200 with updated item in json format
})

itemRouter.delete('/:id', async (req:Request, res:Response) : Promise<Response> =>{
    let itemFound = itemArr.find((x) => x.id === Number(req.params.id));

    if(itemFound !== undefined){
        // itemArr = itemArr.filter((x) => x.id !== Number(req.params.id))
        itemFound.isActive = false;
        return res.status(204).send('deleted');
    }
    else{
        return res.status(404).send("ID Not Found")
    }
});

function GetNextId(){
    // ... is a spread operator
    //turns the array into (1,2,3,4) of the IDs
    return Math.max(...itemArr.map((x) => x.id)) + 1;
}

