let d = new Date;

let year = d.getFullYear();

const copy = document.querySelector("#year").innerHTML = year;
console.log(copy);


const dateModified = document.lastModified;
document.querySelector("#modified").innerHTML = dateModified;


