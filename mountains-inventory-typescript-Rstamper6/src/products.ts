interface Product{
    name:string,
    price:number,
}

let products:Product[] = [
    {name: "Shirt", price: 5},
    {name: "pants", price: 10},
    {name: "jacket", price: 20}
]

function findAvg (products:Product[]): number {
    let newPrice:number = 0;
    let priceHolder:number = 0;
    if(products.length > 0){
        for(let i = 0; i < products.length; i++){
            priceHolder += products[i].price
        }
    }
    else{
        return 0;
    }
    newPrice = priceHolder / products.length

    return Math.round(newPrice * 1e2) / 1e2
}
// console.log(findAvg(products));

export {findAvg, Product}