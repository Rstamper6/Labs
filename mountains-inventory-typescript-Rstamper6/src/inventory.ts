import  {Product}  from "./products";

interface InventoryItems{
    product:Product,
    quantity:number,
}

let inventroy:InventoryItems[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20},
]