var a = {
    firstname : "anouar",
    lastname : "jemai",
    age : 31,
}


var b = {
    firstname : "nabil",
    lastname : "jemai",
    age : 32,
}

var c = {
    firstname : "nabil",
    lastname : "jemai",
    age : 32,
}

for(var key in  a){
    document.write( key + " : "+ a[key] + "<br>") ;

}

for(var key in  b){
    document.write( key + " : "+ a[key] + "<br>") ;

}

console.log(a);
console.log(b);
