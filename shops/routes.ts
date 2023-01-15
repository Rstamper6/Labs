import { Router, Request, Response} from "express";
import { IShop } from "./iShop";

const shops: IShop[] = [
    { id: 1, name: "Pepper's Pizza", rating: 4.5, isActive: true },
    { id: 2, name: "Clive's Chives", rating: 3.4, isActive: true },
    { id: 3, name: "Betty's Brews", rating: 4.3, isActive: true },
    { id: 4, name: "Sylvester's Shoes", rating: 3.8, isActive: true },
    { id: 5, name: "Teddy's Tunes", rating: 4.7, isActive: true }
];

export const itemRouter = Router()

itemRouter.get("/", async (req:Request, res:Response) : Promise<Response> =>{
    if(req.query.minRating !== undefined){
        let minArr = shops.filter((x) => x.rating >= Number(req.query.minRating))
        return res.status(200).json(minArr.filter((x) => x.isActive))
    }
    else{
        return res.status(200).json(shops.filter((x) => x.isActive));
    }
});

itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let idFound = shops.find((x) => x.id === Number(req.params.id));
    let errorObj =  {"error": `Shop not Found ${req.params.id}`}
    
    if(idFound === undefined){
        return res.status(404).json(errorObj);
    }
    else{
        return res.status(200).json(idFound);
    }
});

itemRouter.post("/", async (req:Request, res:Response) : Promise<Response> =>{
    let newItem:IShop = {
        id:GetNextId(),
        name: String(req.body.name),
        rating: Number(req.body.rating),
        isActive: true
    }

    shops.push(newItem)

    return res.status(201).json(newItem);
});


itemRouter.put("/:id", async (req:Request, res:Response) : Promise<Response> =>{
    let itemFound = shops.find((x) => x.id === Number(req.params.id));

    if(itemFound !== undefined){
        itemFound.name = String(req.body.name)
        itemFound.rating = Number(req.body.rating)
        itemFound.isActive = Boolean(req.body.isActive)

        return res.status(200).json(itemFound)

    }
    else{
        return res.status(404).send('Hey I didnt find it bro')
    }
} )

itemRouter.delete('/:id', async (req:Request, res:Response) : Promise<Response> =>{
    let itemFound = shops.find((x) => x.id === Number(req.params.id));

    if(itemFound !== undefined){
        itemFound.isActive = false;
        return res.status(204).send('deleted');
    }
    else{
        return res.status(404).send("ID Not Found")
    }
});


function GetNextId(){
    return Math.max(...shops.map((x) => x.id)) + 1;
}