function main(){
//#1
let grow = document.querySelector("#grow-me");
    grow.classList.add("big");

//#2
let shrink = document.querySelector("#shrink-me");
    shrink.classList.remove("big");

//#3
let logs = document.querySelectorAll("li");
    for(let log of logs){
        console.log(log)
    }

//#4
let link = document.querySelector(".link");
    link.setAttribute("href", "https://www.example.com");
    link.innerText = "somewhere";

//#5
let hidden = document.querySelector("#hide-me");
    hidden.style.display = "none";

//#6
let reveal = document.querySelector("#show-me")
    reveal.style.display = "block"

//#7
let nameInput = document.querySelector("#name")
let name = nameInput.value;
    console.log(name)

let welcome = document.querySelector("h1")
    welcome.innerText = "Welcome " + name;
}