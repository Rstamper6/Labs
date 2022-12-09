import  {Product}  from "./products";

interface InventoryItems{
    product:Product,
    quantity:number,
}

let inventory:InventoryItems[] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20},
];

function calcInvVal(inventory:InventoryItems[]): number {
    let totalInv = 0;
    if(inventory.length > 0){
        for(let i = 0; i < inventory.length; i++){
            totalInv += inventory[i].product.price * inventory[i].quantity
        }
    }
    else {
        return 0;
    }
    return totalInv;

}
console.log(calcInvVal(inventory));

export {calcInvVal, inventory, InventoryItems}