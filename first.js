// DATA TYPES IN JAVA SCRIPT

// not primitive data types

// arrays collections of values 

// console {
    
/*const profile = {
    userName : "insane_0006",
    posts : 195,
    followers : 696,
    following : 0,
    titleName : "w gupta",
    thread : "@wkumar",
    bio : "BCA Student  | Bussinessman",
}
 
profile["posts"] = profile["posts"]+ 1;
console.log(profile["posts"]);
profile["followers"] = profile["followers"] + 1;
console.log(profile["followers"]);
profile["following"] = profile["following"]+ 1;
console.log(profile["following"]);

console.log(profile["userName"]);
console.log(profile["titleName"]);
console.log(profile["thread"]);
console.log(profile["bio"]); */


// console.log(typeof profile["username"]);

//......................................................


// ARITHMATIC OPERATORS 

/*let a = 5;
let b = 3;
let c = a+b;
console.log("a = ", a , "b = ", b);
console.log("a+b = ", a+b );
console.log("a-b = ",  c );

console.log("a+b = ", a+b );
console.log("a*b = ", a*b );
console.log("a-b = ", a-b );
console.log("a/b = ", a/b );
console.log("a%b = ", a%b );
console.log("a**b = ", a**b ); */

//...........................................................

// UNARY OPERATIONS 

/* let a = 5;
let b = 3;

console.log("a = ", a , "b = ", b);
a++; 
console.log("a = ", a); //6
a--; a--;
console.log("a = ", a); //4 */

// post and pre increment and decrement 

/* let a = 5;
let b = 3;

console.log("--a = ", --a ); // 4
console.log("a = ", a);  // 4 

//console.log("a-- = ", a-- );
//console.log("a = ", a); */

//...............................................................

// ASSIGNMENT OPEERATERS 

/*let a = 9;
let b = 8;
let c = 7;
let d = 6;
let e = 5;
let f = 4;
console.log("a = ", a+=1);
console.log("b = ", b-=1);
console.log("c = ", c*=1);
console.log("d= ", d%=1);
console.log("e = ", e**2);
// console.log("f = ", a+=1); */ 

//..................................................................

// COMPARISON OPERATORS 

/*{let a = 10;
let b = 5;

console.log("10==5" , a==b );
console.log("a==b" , a==b );

console.log("10!=5" , a!=b );
console.log("a!=b" , a!=b );
}

{let c = 5;
let d = "5";

console.log("5===5", c===d); // false
console.log("5!==5", c!==d); // true
}  

let e = 6;
let f = 3;

console.log("e>f" , e>f); // true
console.log("e<f" , e<f); // false
console.log("e>=f" , e>=f); // true
console.log("e<=f" , e<=f); // false */

//.......................................................................


// LOGICAL OPERATORS 
 
/* let a = 7; 
let b = 5;

let cond1 = a > b; 
let cond2 = a != b;

console.log("cond1 || cond2 ", cond1 || cond2 ); */ 

//..........................................................................

//CONDITIONAL STATEMENT 
//if-else 

/*let age = 25; 
 
if (age >= 18) {
    console.log("you can eligible for vote");
} else {
    console.log("you cannot eligible for vote")
}
//..........................................
let mode = "dark";
let color;

if (mode === "dark"){
 color = "black";
}
 if(mode === "light"){
    color = "white";
 }

console.log(color);
//.......................................
let num = 10;
if (num %2 == 0) {
    console.log(num , " is even ");
} else {
    (num %2 !== 0) 
     console.log(num , " is odd ");
}
//.......................................
let ages= 70;
if (ages< 18 ){
    console.log("junior");
} else if (ages > 60 ) {
    console.log("senoir");
} else {
    console.log("middle");
}
//.......................................
let modes = "dark";
let colors;

if(modes === "dark"){
    colors = "black";
} else if (modes === "pink"){
    colors = "pink";
} else if (modes === "green"){
    colors = "green";
} else {
    colors = "white";
}
console.log(colors); */

//........................................

//.................................................................................

// TERNARY OPERATOR 
/*
let age = 34;

let result = age > 18 ? "adult" : "not adult"; 

console.log(result);
*/

//.....................................................................................

/*
alert("hello");
 let name = prompt("welcome");
 console.log(name);
*/

//.......................................................................................

// get user to input a number using prompt ("enter a number")
// check if the number is a multiple of 5 or not. 

/*
let num = prompt("enter a number ");
 if(num % 5 === 0){
    console.log(num);
    console.log(num , " this number is a multiple of 5 ");
 }
*/

//.........................................................................................
 

/* write a code which can give grades to student according to thier scores. 
 90-100,A
 70-89,B
 60-69,C
 50-59,D
 0-49,E
*/

/*
let marks = prompt("enter own marks");
let grade;
if(marks >= 90 && marks <= 100){
    grade = "A";
} else if (marks >= 70 && marks <= 89 ){
    grade = "B";
} else if (marks >= 60 && marks <= 69 ){
    grade = "C";
} else if (marks >= 50 && marks <= 59 ){
    grade = "D";
} else {
    grade = "F";
} 
 console.log("Grade", grade);
*/







