let letters = document.querySelector("#letters");
console.log(letters);

let nums = document.querySelector("#numbers")
console.log(nums);
nums.style.display = "none";

let letterClick = document.querySelector(".letDrop")
letterClick.addEventListener('click', buttonClicked);
    function buttonClicked(){
        letters.style.display = "block";
        nums.style.display = "none";


    }

let numClick = document.querySelector(".numDrop")
 numClick.addEventListener('click', buttonClicked1);
    function buttonClicked1(){
        nums.style.display = "block";
        letters.style.display = "none";

    
    }