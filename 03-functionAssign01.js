function sayHello(){
    console.log("Hello All");
}
sayHello();
console.log("===========================================");

function personalDetails(firstName, lastName, collegeName){
console.log("My first name is",firstName);
console.log("My last name is",lastName);
console.log("My college name is",collegeName);

}

var details = personalDetails("Rohit", "Dhende", "Waghire College");
console.log("===========================================");

function addThreeValues(n1, n2, n3){
var result=n1+n2+n3;
console.log("Addition is",result);
}

addThreeValues(10.23, 600, 40);
addThreeValues("Hello", "Good", "Morning");