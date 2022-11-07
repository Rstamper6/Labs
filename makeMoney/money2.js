let form = document.getElementById('coinForm');
let howMany = document.getElementById('howMany');
let totalText = document.querySelector("h2");

let quarter = document.getElementById('quarter');
let dime = document.getElementById('dime');
let nickel = document.getElementById('nickel');
let penny = document.getElementById('penny');

let qp = .25;
let dp = .10;
let np = .05;
let pp = .01;


let imgDiv = document.getElementById('coinPics')
imgDiv.addEventListener('click', e =>{
    e.target.remove();
})


form.addEventListener('submit', e=> {
    e.preventDefault()
    // console.log(howMany.value);
    let total = 0;

    if(quarter.checked){
        for(let i = 0; i < howMany.value; i++){
            let img = document.createElement('img');
            img.src = "./images/quarter.png";
            img.classList.add("qtrImg")
            img.classList.add("image")
            document.getElementById('coinPics').appendChild(img)
            }
        total = qp * howMany.value
        console.log(total);
        console.log(`Quarter is checked and ${howMany.value} were added`);
    }
    else if(dime.checked){
        for(let i = 0; i < howMany.value; i++){
            let img = document.createElement('img');
            img.src = "./images/dime.png";
            img.classList.add("dimeImg")
            img.classList.add("image")
            document.getElementById('coinPics').appendChild(img)
            }
        total = dp * howMany.value
        console.log(total);
        console.log(`Dime is checked and ${howMany.value} were added`);
    }
    else if(nickel.checked){
        for(let i = 0; i < howMany.value; i++){
            let img = document.createElement('img');
            img.src = "./images/nickle.png";
            img.classList.add("nickelImg")
            img.classList.add("image")
            document.getElementById('coinPics').appendChild(img)
            }
        total = np * howMany.value
        console.log(total);
        console.log(`Nickel is checked and ${howMany.value} were added`);
    }
    else if(penny.checked){
        for(let i = 0; i < howMany.value; i++){
            let img = document.createElement('img');
            img.src = "./images/penny.png";
            img.classList.add("pennyImg")
            img.classList.add("image")
            document.getElementById('coinPics').appendChild(img)
            }
        total = pp * howMany.value
        console.log(total);
        console.log(`Penny is checked and ${howMany.value} were added`);
    }

    totalText.innerText = `Your total is $${total + total}`





    
})


