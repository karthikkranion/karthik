var firstname = prompt("Hello,Enter your first name:");
var lastname = prompt("enter your last name:");
var age = prompt("enter your age between 20 to 30");
var tall = prompt("how tall  are you?");
var petname= prompt("enter your pet name :");

 alert("Thank you so much for answer");
//Name condition
 if (firstname[0] === lastname[0]) {
   firstname= true;
 } else {
   firstname=false;
 }
//age condition
if (age>20 && age< 30) {
  age= true;
} else {
  age=false;
}

//tall condition

if (tall >= 175) {
  tall= true;
} else {
  tall=false;
}

// petname
if (petname[petname.length-1] === "y") {
  petname= true;
} else {
  petname = false;
}

//all condition true
if (firstname && lastname && age && petname) {
  console.log("hello welcome spy");
} else {
  console.log("nothing to see here");
}
