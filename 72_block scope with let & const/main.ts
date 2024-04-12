//Block scope of let works inside the block {} it does not work outside {}
{let blocklet = "work inside the block";
console.log(blocklet);
const blockconst = "work outside the block";
console.log(blockconst);
}
try {
    console.log(blocklet); //console give error, is not accessible outside
}
try {
console.log(blockconst); //console gives error
}