var n1=10;
var n2=20;

var result= n1==n2 ? "Equals" : "Not equal" ;
console.log(`${result}`);

var age=20;

var result= age >=18 ? "You are eligible for vote" : "You are not eligible" ;

console.log(`${result}`);

console.log(`===============================`);


function voteEligibility(age){

    var result= age >=18 ? "You are eligible for vote" : "You are not eligible" ;

    console.log(`${result}`);

}

voteEligibility(30);
console.log(`===============================`);
voteEligibility(10);


