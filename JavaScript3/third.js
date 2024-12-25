
// By using var

// var age=24;
// var age=35;
// var age=67;
// console.log(age);


// Here by using let 

// let age=34;
// age=56;
// age=98
// console.log(age);



// Here by using const

// const PI =3.14;
// console.log(PI);


// when we can use const intiaizse the value 1st

// const k=10;
// console.log(k);


// let used in block only for example:

// {
//     let a= 10;
//     console.log(a);
// }
// {
//     let a= 15;
//     console.log(a);
// }


// data types in primitive 
// NUMBER data types

// let age=24;

// STRING data type

// let fullName = "robot";

// BOOLEN data type

// isFollow=true;

// UNDEFINED data type

// let x;

// NULL DATA TYPE
// let x= null;

// BigInt data type
// let x=BigInt("123");


// Symbol data type

// let k=Symbol("hai!");


// OBJECT enter data of a student

// const student={
//     fullName :"Khaleel",
//     age:24,
//     cgpa:8.1,
//     ispass:true  
// };

// // or

// console.log(student["fullName"]);

// student["name"]="khaleel icon";

// console.log(student["name"]);



// create a const object called "product" to store information in the picture


// const product={
//     name:"ball pen",
//     rating:4,
//     price:300,
//     offer:5
// };
// console.log(product);


// create a const object called profile to store information shown in the picture
  

// const profile={
//     username:"@khaleelicon",
//     followers:800,
//     following:2,
//     isfollow:true,
// };




// Arithimatic Opraters

// let a =2;
// let b=3;

// console.log("a=",a , "& b=",b);
// console.log("a+b",a+b);
// console.log("a-b",a-b);
// console.log("a*b",a*b);
// console.log("a/b",a/b);
// console.log("a%b",a%b);
// console.log("a**b",a**b);


// Unary Operator

// let a =2;
// let b=3;
// console.log("a=",a , "& b=",b);
// // a++;
// // a=a+1;
// // a--;
// // a= a-1;
// console.log("a=",a);

// Assignment operators:

// =  +=   -=  *=  %=  **=

// let a=2;
// let b=3;
// // a += 2;
// // a -= 4;
// // a *= 4;
// // a /= 4;
// a ** 4;
// console.log("a=",a); //a=a+2//a=4


// comparsion operators:

// equal to == ,    equal to & type ===
// Not equal to !=,  Not equal to & type !==

// let a = 5;
// let b = 2;
// console.log("5 == 2", a==b);
// console.log("5 === 2", a===b);

// let a = 5;
// let b = 5;
// // console.log("5 != 5", a != b);
// console.log("5 !== 5", a !== b);

// let a=5;
// let b=3;
// // // console.log("5 > 3",a > b);
// // // console.log("5 > 3",a<b);
// // // console.log(5 <= 3,a <= b);
// console.log(5 >= 3,a >= b);

// logical operators;

// AND &&
// OR ||
// NOT !

// let a=6;
// let b=5;
// let cond1 = a > b;
// let cond2 = a === 5;
// console.log("cond1 && cond2=", cond1 && cond2);

// let a=6;
// let b=5;
// console.log("cond1 || cond2=",a>b || a ===b);

// let a=6;
// let b=5;
// console.log("!(6<5)=",!(a<b));

// conditional statements

// let age = 25;

// if (age >= 18){
//  console.log("YOU CAN VOTE");
// }
//  if (age < 18){
//  console.log("YOU CAN'T VOTE");
// }


// make theme in dark mode or light mode code using if statement

// let mode = "light";
// let color;

// if (mode === "dark"){
//     color="black"
// }

// if (mode ==="light"){
//     color = "white"
// }
// console.log(color);

// make theme in dark mode or light mode code using if-else statement

// let mode = "light";
// let color;

// if (mode === "dark"){
//     color="black"

// } else{
//     color = "white"
// }
// console.log(color);

// vote using if-else statement

// let age=16;

//  if(age >= 18){
//     console.log("vote");
//  } else{
//     console.log("not vote");
//  }


// odd or even by using if-statement

// let num = 3;

// if (num%2 === 0){
//     console.log(num," is even");
// }else{
//     console.log(num,"is odd");
// }


// using else if statement modes

// let mode="red"
// let color;

// if (mode === "dark"){
//     color = "black"
// }else if (mode === "blue"){
//     color = "blue"
// }else if (mode === "red"){
//     color = "red"
// }else{
//     console.log("white");
// } 
// console.log(color);

// ternary opertors

// a ? b : c

// let age = 25;
// let result=age >=18 ? "adult" : "not adult";
// console.log(result);

// USING PROMPT

// let name = prompt("hello!")
// console.log(name);

// let num = prompt ("enter a value");
 
// if(num % 3 === 0){
//     console.log(num,"is multiply by 3");
// } else {
//     console.log(num,"is not multiply by 3" );
// }


// LOOPS IN JAVA SCRIPT

// print loop 1 to 5

// for(let count=1;count<=5;count++){
//     console.log("Mahendra ec 6e")
// }


// calculate sum of 1 to 5 by using loop

// let sum = 0;
// let n = 10;
// for (let i = 1; i <= n; i++){
//     sum = sum + i;
// }
// console.log("sum=",sum);
// console.log("loop has ended");

// for(let count=1;count<=5;count++){
//     console.log("count=",count)
// }

// let i=1;
// while (i<=5){
//     console.log("i=",i);
//     i++;
// }

// using do while loop 1 to 5

// let i=1;

// do {
//     console.log("i=",i);
//     i++
// }while(i<=5);


// FOR-OF LOOP

// let str="khaleel icon";

// for(let  i of str){
//     console.log("i=",i);
// }


// for-of loop using size checking

// let str="khaleel icon";

// let size = 0;
// for(let val of str){
//     console.log("val=",val);
//     size++;
// }
// console.log("string size",size);

// FOR-IN LOOP:

// let student={
//     name: "ranga",
//     age: 24,
//     cgpa: 9.0,
//     ispass: true,

// };

// for(let key in student){
//     console.log("key=",key, "value=",student[key]);

// }


// print all even numbers from 0 to 100.

// let n;
// for (let n=0; n<=100; n++){
//     if(n%2==0){
//         // even number

//     // if(n%2!=0){
//     //     // odd number
//     console.log("n=",n);
// }
// }

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.


// let gameNum=100;
//     let userNum=prompt("Guess the game number:");{
// }
// while(userNum != gameNum){
//     userNum=prompt ("You Guess The Wrong Number:");
// }
// console.log("Congratulations, You Guess The Right Number");

// STRINGS: how to create a string example

// let str="hai this is khaleel";

//to access the string positions

// let str="hai this is khaleel";
// console.log(str[7]);//s

// TEMPLATE LITERALS:

// let specialString = `this is a template literal`;
// console.log(typeof specialString);

// how to implement Template example;

// let obj={
//     items:"pen",
//     price:10,
// };
// console.log("the cost of", obj.item,"is", obj.price,"rupees")
                   
//                  //OR

// let output=`the cost of ${obj.item} is ${obj.price}rupees`;
// console.log(output);

// BACK SLASH and N: \n

// it get next line in string in the output:

// console.log("khaleel \n icon");

//TAP SPACES:

// console.log("khaleel \t icon");


// STRING METHODS IN JS:

//STR UPPER CASE

// str.toUpperCase() "abc" --> "ABC"

// let str="khaleel icon";
// str=str.toUpperCase()
// console.log(str); 
 

//STR LOWER CASE

// str.toLowerCase() "ABC" --> "abc"

// let str="KHALEEL ICON";
// str=str.toLowerCase()
// console.log(str); 

///STR TRIM

//str.trim() it can remove starting and ending spaces

// let str="     khaleel icon    ";
// console.log(str.trim());

//STR SLICE

//str.slice(start,end?)
//returns part of string

// let str = "ranganathReddy";
// console.log(str.slice(1,10));

 //STR CONCAT
 //JOINS STR2 WITH STR1


// let str1= "ranga";
// let str2="khaleel";
// console.log(str1.concat(str2));


// STR.REPLACE(seachVal,newVal)
// when we need a word to search the word or value and it replace a new word in that place.

//  let str="ranga";
//  console.log(str.replace("ranga","rama"));


// STR.CHAR

// str.charAt(idx)

// let str = "iloveJS";
// console.log(str.charAt(2));  //o

// Let's Practice
// Qs1. Prompt the user to enter their full name. Generate a username for them based on the input.Start username with @, followed by their full name and ending with the fullname length.
// eg: user name = "shradhakhapra", username should be "@shradhakhapra13"

// let fullName=prompt("enter your fullName without spaces:");
// let username="@" + fullName + fullName.length;
// console.log(username);


// ARRAYS:


// let marks= [99,54,78,95,92];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["ironman","thor","hulk","spiderman","venom"]
// console.log(heroes)


// ARRAY USING FOR LOOPS USE HEROES

// let heroes = ["ironman","thor","hulk","spiderman","venom"]
// for (let index=0; index < heroes.length; index++){
// console.log(heroes[index])
// }


// FOR-OF LOOP USING ARRAYS:

// let heroes = ["ironman","thor","hulk","spiderman","venom"]
//  for(let hero of heroes){
//  console.log(hero)
//  }


// let cities = ["guntakal","kurnool","goothy","dehil","hyd"]
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


//Let's PracticeQs. For a given array with marks of students - [85, 97, 44, 37, 76, 601]; Find the average marks of the entire class


// let marks =[85,97,44,37,76,60];
// let sum = 0;
// for (let val of marks){
//     sum =sum+val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);

// let items=[250,645,300,900,50];

// for (let i=0; i < items.length; i++){
//     let offer = items[i] / 10;
     
//     items[i]= items[i] - offer;
// }

// console.log(items);


// ARRAYS IN JAVA:PUSH() add to end

// let foodItems= ["papaya","tomato","apple","potota","beetroot"];
// foodItems.push("beens","cucumber","litchi","banana");
// console.log(foodItems)


// let arr=[1,2,3,4];
// arr.push(5,6);
// console.log(arr)


// POP() delete from end & return

// let foodItems= ["papaya","tomato","apple","potota","beetroot"];
// foodItems.pop();
// console.log(foodItems)

// let arr=[1,2,3,4];
// arr.pop();
// console.log(arr);



// TO String(): CONVERT ARRAY TO STRING

// let fruits=['apple','banana','carry'];
// let results= fruits.toString();
// console.log(results);


// CONCAT() : JOIN MULTIPL ARRAYS AND RETURNS RESULT

// let cellPhone1=['vivo','oppo','realme','oneplus'];
// let cellPhone2=['iphone','samsung','pixcel'];

// let cell= cellPhone2.concat(cellPhone1);
// console.log(cell);

// UNSHIFT(): ADD TO START


// let cellPhone = ["vivo","oppo","realme","oneplus"];
// cellPhone.unshift("iphone");


// SHIFT():delete from start and return

// let cellPhone=["vedio","oppo","realme","oneplus"];
// let val = cellPhone.shift();
// console.log("deleted",val);


// let cellPhone = ["vivo","iphone","oppo","realme","oneplus"];
// console.log(cellPhone.slice(1,4))

// SPLICE():CHANGE ORIGINAL ARRAY (ADD,REMOVE,REPLACE);

// let arr=[1,2,3,4,5,6,7]
// arr.splice(2,2,101,102)



// Qs. Create an array to store companies -> "Bloomberg", "Microsoft”, “Uber”, "Google", "IBM", "Netflix

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end



// let companies=["bloomberg","microsoft","uber","google","ibm","netfix"];

// companies.shift();


// let companies=["bloomberg","microsoft","uber","google","ibm","netfix"];

// companies.splice(2,1,"Ola");

// let companies=["bloomberg","microsoft","uber","google","ibm","netfix"];

// companies.push("Amazon");


// FUNCTIONS: BLOCK OF CODE THAT PERFORMS A SPECIFIC TASKS, ACN BE INVOKED WHENEVER NEEDED

// function myFunction(){
//     console.log("welcome to JS");
//     console.log("we are learning JS:");

// }

// myFunction();



//FUNCTION SUM OF TWO NUMBER

// function sum(x,y){

//     console.log(x+y);
// }



// ARROW FUNCTION

// const arrowSum = (a,b)=>{
//     console.log(a+b);
// };

// const arrowMul = (a,b) =>{
//     return a*b;
// };


// print hello in the output using ARROW FUNCTION

// const printHello = () => {
//     console.log("hello");
// }

// Qs. Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string.



// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//       if(
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//        ){
//         count++
//        }
//     }
//   console.log(count);
//   //return count

// }


// FOREACH LOOP IN ARRAYS

// Arr.forEach(call BackFuncatio)
// callbackFunction: here, it is a function to execute for each element in the array

// let arr =["pune","delhi","mumbai"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });


// program :parameter using value or val,index or idx, array or arr

// let arr =["pune","delhi","mumbai"];
// arr.forEach((val,idx,arr) => {
//     console.log(val.toUpperCase(),idx,arr);
// });



// Qs. For a given array of numbers, print the square of each value using the forEach loop.


// let nums =[2,3,4,5]

// nums.forEach((num) => {
//     console.log(num*num)
// })


// MAP

// let nums =[45,76,97];
//  let newArr  = nums.map((val)=>{
//     return val*2;
//  });
//  console.log(newArr);


// FILTER

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12]
//  let evenArr = arr.filter((val) =>{
//     return val % 2 === 0;
//  });
//  console.log(evenArr);


// REDUCE 


// let arr = [1,2,3,4];
// const  output = arr.reduce((res,curr) =>{
//     return res + curr;

// });
// console.log(output);


let arr = [10,50,70,200,10];
const  output = arr.reduce((prev,curr) =>{
    return prev > curr ? prev : curr;

});
console.log(output);



