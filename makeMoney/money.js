let howMany = document.getElementById('howMany').value;
// console.log(howMany);
let form = document.querySelector("#coinForm")
let imgDiv = document.querySelector("#coinPics")
let whichCoin = document.querySelector('input[name="coin"]:checked');
// console.log(whichCoin);

let quarter = document.getElementById('quarter').value;
let dime = document.getElementById('dime').value;
let nickel = document.getElementById('nickel').value;
let penny = document.getElementById('penny').value;



function addQuarter() {
    for(let i = howMany; i < howMany; i++){
    let img = document.createElement('img');
    img.src = "./images/quarter.png";
    img.classList.add("qtrImg")
    document.getElementById('coinPics').appendChild(img)
    }
}
addQuarter();

function addDime() {
    for(let i = 0; i < howMany; i++){
    let img = document.createElement('img');
    img.src = "./images/dime.png";
    img.classList.add("dimeImg")
    document.getElementById('coinPics').appendChild(img)
    }
}
// addDime()

function addNickel() {
    for(let i = 0; i < howMany; i++){
    let img = document.createElement('img');
    img.src = "./images/nickle.png";
    img.classList.add("nickelImg")
    document.getElementById('coinPics').appendChild(img)
    }
}
// addNickel()

function addPenny() {
    for(let i = 0; i < howMany; i++){
    let img = document.createElement('img');
    img.src = "./images/penny.png";
    img.classList.add("pennyImg")
    document.getElementById('coinPics').appendChild(img)
    }
}
// addPenny()



function countCoins(event){
    event.preventDefault();

    if(whichCoin = quarter){
        addQuarter(howMany);
    }
    else if(whichCoin = dime){
        addDime(howMany);
    }
    else if(whichCoin = nickel){
        addNickel(howMany);
    }
    else if(whichCoin = penny){
        addPenny(howMany);
    }
    else {
        null
    }

    console.log(whichCoin);
    
}


form.addEventListener('submit', countCoins)