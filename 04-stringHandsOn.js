function stringHandsOn(){

    var str = "    Hey you are doing good, keep it up     ";

    console.log(`Given string is${str}`);
    console.log(`length of the string is ${str.length}`);
    var result = str.trim();    
    console.log(`After trim string is ${result} and it's length is ${result.length}`);

    console.log(`First character is ${result.charAt(0)} and last character is ${result.charAt(result.length-1)}`);

    
    var resultValue = result.split(" ");
    console.log(`Total words are ${resultValue} and it's length is`);    
    console.log(`Index of good is :${result.indexOf("good")}`);
    console.log(`Substring is :${result.substring(22)}`);
    
}

stringHandsOn();

