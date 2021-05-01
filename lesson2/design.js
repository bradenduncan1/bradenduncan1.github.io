let d = new Date;

let year = d.getFullYear();

const copy = document.querySelector("#year").innerHTML = year;



const dateModified = document.lastModified;
document.querySelector("#modified").innerHTML = dateModified;