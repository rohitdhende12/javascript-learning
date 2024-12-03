let array = [10, 20, 45, 30, 77, 60];
console.log("Find the odd numbers from the given array");
let oddNumCount=0;
for (const element of array) {
    if (element%2==1) {
        console.log(element);
        oddNumCount= oddNumCount+1;
    }
}
console.log(oddNumCount);

console.log("WAP to count the vowels in the given string");

console.log("============================================");

const myLove = "I love only JavaScript";
const vowels = "aeiou";

let counterVowels = 0;

for (const char of myLove) {

    if (vowels.includes(char.toLowerCase())) {
        counterVowels = counterVowels+1;
    }
}
console.log(`Vowels count in this string is : ${counterVowels}`);


console.log("WAP to count the A character in the given string");

console.log("============================================");

const sentence = "Javascript LANGUAGE";

let countAChar=0;

for (const char of sentence) {
    
    if (char=="a"||char=="A") {
        countAChar = countAChar+1;        
    }
}
console.log(`Count of character A in the string is : ${countAChar}`);


