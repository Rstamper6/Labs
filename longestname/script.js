let name1 = "Riley";
let name2 = "Tony";
let name3 = "Sam Smith";

if (name1.length > name2.length && name1.length > name3.length){
    console.log (`${name1} is the longest name.`)
}
else if (name2.length > name1.length && name2.length > name3.length){
    console.log (`${name2} is the longest name.`)
}
else if (name3.length > name1.length && name3.length > name2.length){
    console.log (`${name3} is the longest name.`)
}
else if (name1.length === name2.length && !(name1.length === name3.length)){
    console.log (`${name1} and ${name2} tie for the longest name.`)
}
else if (name1.length === name3.length && !(name1.length === name2.length)){
    console.log (`${name1} and ${name3} tie for the longest name.`)
}
else if (name2.length === name3.length && !(name2.length === name1.length)){
    console.log (`${name2} and ${name3} tie for the longest name.`)
}
else {
    console.log (`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`)
}