// var FirstName = "Ada";
// firstLetterOfFirstname = FirstName[0];
// //setup
// var firstLetterOfLastname = "";
// var lastName = "Lovelace";
// // Only change code be
// firstLetterOfLastname = LastName [0];
// console.log(firstLetterOfLastname);
// console.log(firstLetterOfFirstname);
// function myFunction() {
//     document.getElementById("demo").innerHTML = "Paragraph changed.";
//   }


// funkcia

// let result = "";
// function wordBlanks (myNoun, myAdjective, myVerb, myAdverb) {
//   let result="";
//   result += "The " + myAdjective+ " " + myNoun+ " " + myVerb + " to the store " + myAdverb;
//   return result;
// }
// // console.log(result);
// console.log(wordBlanks("dog", "big", "ran", "quickly"));
// console.log(wordBlanks("bike", "slow", "flew", "slowly"));
//const
// length


//promenqne chasticno var

// var ourArray = [ 18 , 64 , 99 ];
// ourArray[0] = 45;
// console.log(ourArray);

// var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10, 11, 12], 13, 14]];
// var myData = myArray[2][1];
// console.log(myData);



//izvikvane na funkcii
//zad1
// function ourReusableFunction(){
//   console.log("Heyya, World");  
// }
// ourReusableFunction();
// ourReusableFunction();
// ourReusableFunction();
// function reusableFunction (){
//   console.log("Hi  world");
// }
// reusableFunction();
// reusableFunction();
// reusableFunction();
// function ourFunWithArgs(a, b){
//   console.log(a - b);  
// }
// ourFunWithArgs(10, 5);
// ourFunWithArgs(20, 5);
// ourFunWithArgs(18, 3);
// function funWithArgs(c, d){
//   console.log(c+d)
// }
// funWithArgs(10, 5);
// funWithArgs(3, 8);
// funWithArgs(12, 9);

//G
// zad 2
// myGlobal = 10;
// function fun1(){
//   oopsGlobal = 5;
// }
// function fun2(){
//   var output = "";
//   if(typeof myGlobal != "underfriend"){
//     output += "myGlobal: " + myGlobal;
//   }
//   if(typeof oopsGlobal != "undrfriend"){
//     output += "oopsGlobal: " + oopGlobal;
//   }
//   console.log(output);
// }
// fun1();
// fun2();


// zad 3 
// function minusSeven(num) {
//   return num - 7;
// }
// console.log(minusSeven(10));
// function timesFive(num){
//   return num * 5;
// }
// console.log(timesFive(5));


// zad4
// var processed = 0;
// function processArg(num){
//   return (num + 3) / 5;
// }
// processed = processArg(7); 
// console.log(processed);

// Bool true/false
// zad 1
// function ourTrueOrFalse(isItTrue){
//   if (isItTrue == 10){
//     return "yes, it's true";
//   }
//   return "No, it's False";
// }
// console.log(ourTrueOrFalse(10));

// zad2
// function compareEqualLity(a , b) {
//   if(a == b) {
//     return "Equal";
//   }
//   return "not Equal";
// }
// console.log(compareEqualLity(10, "10"));

// zad 3
// function testStrict(val) {
//   if (val !== 17) {
//     return "Not equal";
//   }
//   return "Equal";
// }
// console.log(testStrict(17));

// zad 4
// function testGreaterOrEqual(val){
//   if(val>=20) {
//     return "20 or Over";
//   }
//   if(val>=10){
//     return "10 or Over";
//   }
//   return "less than 10";
// }
// console.log(testGreaterOrEqual(18));

// zad 5
// function testlessThan(val){
//   if(val<25){
//     return "Under 25";
//   }
//   if(val<55){
//     return "Under 55";
//   }
//   return "55 or Over";
// }
// console.log(testlessThan(78));



// // Logicheski operatri i/ili &&/||

// //&&
// function testLogicalAnd(val){

//   if(val <= 50 && val >= 25 ){ 
//       return "Yes";
//   }
//   return "No";
// }
// console.log(testLogicalAnd(40));

// //||
// function testLogicalOr(val){
//   if( val < 10 || val > 20 ) {
//     return "Outside";
//   }
//   return "Inside";
// }
// console.log(testLogicalOr(15));


// else
// function testElse(val){
// var result = "";
// if (val > 5){
//   result="Bigger than 5";
// } else {
//   result = "5 or Smaller";
// }
// return result;
// }
// console.log(testElse(3));


//else if

// function testElseIf(val) {
//   if (val > 10 ){
//     return "Greate than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// }
// console.log(testElseIf(6));


// Zadacha sus if i else

// function zadIfElse(num) {
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//      return "Small";
//   } else if (num < 15) {
//      return "Medium";
//   } else if(num < 20) {
//      return "Large";
//   } else {
//      return "Huge";
//   }
// }
// console.log(zadIfElse(3));
// console.log(zadIfElse(8));
// console.log(zadIfElse(13));
// console.log(zadIfElse(18));
// console.log(zadIfElse(23));


//Zadacha za rezltat v golf igra 

// var names = ["Hole-in-one", "Eagle", "Bridge", "Par", "Bogey", "Double Bogey", "Go Home!"];
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//      return names[0];
//   } else if (strokes <= par - 2) {
//      return  names[1];
//   } else if (strokes == par - 1) {
//      return names[2];
//   } else if (strokes == par) {
//      return names[3];
//   } else if (strokes == par + 1) {
//      return names[4];
//   } else if (strokes == par + 2) {
//      return names[5];
//   } else if (strokes >= par + 2) {
//      return names[6];
//   }
// }

// console.log(golfScore(5, 1));
// console.log(golfScore(5, 2));
// console.log(golfScore(5, 4));
// console.log(golfScore(5, 5));
// console.log(golfScore(5, 6));
// console.log(golfScore(5, 7));
// console.log(golfScore(5, 8));
// console.log(golfScore(5, 9));



