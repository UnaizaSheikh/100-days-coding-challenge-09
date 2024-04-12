//Block scope of let works inside the block {} it does not work outside {}
{
    var blocklet = "work inside the block";
    console.log(blocklet);
    var blockconst = "work outside the block";
    console.log(blockconst);
}
try {
    console.log(blocklet); //console give error, is not accessible outside
}
finally {
}
try {
    console.log(blockconst); //console gives error
}
finally { }
