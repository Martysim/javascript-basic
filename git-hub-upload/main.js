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


// //fun s case

// zad 1

// function caseInSwitch(val){
//     var answer = "";
//     switch(val){
//         case 1:
//           answer = "alpha";
//           break;
//         case 2:
//           answer = "Beta";     
//           break;
//         case 3:
//           answer = "gama";
//           break;
//         case 4:
//           answer = "delta";     
//           break;
//     }
//     return answer;
// }
// console.log(caseInSwitch(1));
// console.log(caseInSwitch(2));
// console.log(caseInSwitch(3));
// console.log(caseInSwitch(4));

// zad 2

// function caseInSwitch(val){
//     var answer = "";
//     switch(val){
//         case "a":
//           answer = "alpha";
//           break;
//         case "b":
//           answer = "Beta";     
//           break;
//         case "c":
//           answer = "gama";
//           break;
//         default:
//             answer = "stuff";
//             break;
//     }
//     return answer;
// }
// console.log(caseInSwitch("a"));
// console.log(caseInSwitch("b"));
// console.log(caseInSwitch("c"));
// console.log(caseInSwitch("d"));
// console.log(caseInSwitch(5));


// zad 3

// function casove(val) {
// var answer = "";
//  switch(val) {
//      case 1:
//      case 2:
//      case 3:
//          answer = "Low";
//          break;
//     case 4:
//     case 5:
//     case 6:
//          answer = "Mid";
//          break;
//     case 7:
//     case 8:
//     case 9:
//         answer = "Hight";
//         break;       
//     }
//     return answer;
// }
// console.log(casove(2));
// console.log(casove(5));
// console.log(casove(7));


// function isLess(a, b){
//     return a < b;
// }
// console.log(isLess(10, 15))


//zad s karti

// var count = 0;
// function cc(card) {
//     switch(card) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             count++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             count--;
//             break;
//     }
//     var holdbet = 'hold';
//     if (count > 0) {
//         holdbet = 'Bet';
//     }
//     return count + " " + holdbet;
// }
// cc(2); cc(3); cc(7); cc('K'); cc('A');
// console.log(cc(4));

//

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "trails": 2,
//     "friends": []
// };
// console.log(myDog);
// console.log(ourDog);


// var testObj = {
//     "hat": "Ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
// };
// var hatValue = testObj.hat;
// var shirtValue = testObj.shirt;
// console.log(hatValue);

// var testObj = {
//     "an entree": "hamburger",
//     "myside": "veggies",
//     "the drink": "water"
// };
// var entreeValue = testObj["an entree"];
// var drinkValue = testObj['the drink'];
// console.log(entreeValue);
// console.log(drinkValue);

// var testObj = {
//     12: "Nomath",
//     16: "Montana",
//     19: "Unitas"
// };
// var playerNumber = 16;
// var player = testObj[playerNumber];
// console.log(player);

// var ourDog = {
//     "name": "Camper",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["everything!"]
// };
// ourDog.name = "Happy Camper";
// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "trails": 2,
//     "friends": []
// };
// myDog.name = "Happy Coder";
// console.log(myDog);
// console.log(ourDog);


// dobavqne i mahane na obj

// var myDog = {
//     "name": "Quincy",
//     "legs": 3,
//     "trails": 2,
//     "friends": []
// };
// myDog.bark1 = "baw baw";
// myDog['bark'] = "woof";

// delete myDog.name;

// console.log(myDog);

// function phoneticLookup(val) {
//     var result = "";
//     var lookup = {
//         "alpha": "Adams",
//         "bravo": "Boston",
//         "charlie": "Chicago",
//         "delta": "Denver",
//         "echo": "Easy",
//         "foxfort": "Frank"        
//     };
//     result = lookup[val];
//     return result;
// }
// console.log(phoneticLookup("bravo"));



// ZAD ZA PROVERKA

// var myObj = {
//     gift: "pony",
//     pet: "kitten",
//     bed: "sleigh"
// };
// function checkObj(checkProp) {

//     if (myObj.hasOwnProperty(checkProp)) {
//         return myObj[checkProp];
//     } else {
//         return "Not Found";
//     }
// }
// console.log(checkObj("bed"));
// console.log(checkObj("gift"));
// console.log(checkObj("pet"));
// console.log(checkObj("Hello"));


// var myMusic = [
//     {
    
//     "artist": "Billy Joel",
//     "title": "Piano Man",
//     "release_year": 1973,
//     "formats": [
//         "CD",
//         "8T",
//         "LP"
//     ],
//     "gold": true
//     },
//     {
//         "artist": "Beau Carnes", 
//         "title": "Cereal Man",
//         "release_year": 2003,
//         "formats": [
//             "YouTube video"
//         ]

//     }

// ];



// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };
// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// var myPlants = [
//     {
//         type: "flowers",
//         list:[
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         tyoe: "trees",
//         list: [
//             "fir",
//             "pine",
//             "brich"
//         ]
//     }
// ];
// var secondTree = myPlants[1].list[1];
// console.log(secondTree);


// while cikul

// var myArray = [];
// var i = 0;
// while (i < 5) {
//     myArray.push(i);
//     i++;
// }
// console.log(myArray);

//for cikul

// var ourArray = [];
// for (var i = 0; i < 10; i++) {
//     ourArray.push(i);
// }
// var myArray = [];
// for (var i = 1; i < 6; i++ ) {
//     myArray.push(i);
// }
// console.log(ourArray);
// console.log(myArray);

// var myArray = [];
// for (var i = 0; i < 10; i+= 2) {
//     myArray.push(i);
// }
// console.log(myArray);


// var myArray = [];

// for(var i = 10; i > 0; i -= 2) {
//     myArray.push(i);
// }
// console.log(myArray);


// var ourArr = [9, 10, 11, 12];
// var ourTotal = 0;
// for (var i = 0; i < ourArr.length; i++) {
//     ourTotal += ourArr[i];
// }
// console.log(ourTotal); 

// var myArr =  [ 2, 3, 4, 5, 6];
// var total = 0;

// for(var i = 0; i < myArr.length; i++) {
//     total +=myArr[i];
// }
// console.log(total);


// function multiplyAll(arr) {
//     var product = 1;
//     for (var i = 0; i < arr.lenght; i++) {
//         for (var j = 0; j < arr[i].lenght; j++) {
//             product *= arr[i][j];
//         }
//     }
//     return product;
// }
// var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
// console.log(product);


// Do and while loops 

var myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while ( i < 5)


console.log(i, myArray);