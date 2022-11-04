
//This is a comment"
/* 
This is a test 
If you want to know more, please contact 

_______________________________

A variable is a container for storing data
A variable behaves as if it was the value that it contains

// Two Step:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

*/

var firstname = "Bro"; //strings
var age = 31; //number
var student = true; //booleans
var Country = "Singapore";
var Address = "Kelantan"
var Status = "Haji Nuzaihan"


console.log ("Hello " + firstname) // "Bro"
console.log ("You are " + age + " years old");
console.log ("Enrolled:" + student);
console.log ("You're from", Country);
console.log ("You lived in " + Address);
console.log ("Your rank status is " + Status);

document.getElementById("p1").innerHTML = "Hello " + firstname;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled:" + student;
document.getElementById("p4").innerHTML = "You're from " + Country;
document.getElementById("p5").innerHTML = "You lived in " + Address;
document.getElementById("p6").innerHTML = "Your rank status is " + Status;

window.alert ("VIRUS DETECTED!") ;
