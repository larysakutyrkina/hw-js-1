let name =prompt("Please enter your name:)") 

if (name === "") {
    prompt("What is your REAL name?");
} 

let number =prompt("Now please enter your age!")

if (isNaN(number)){
    alert(number+"is not a number!");
}

if ( number < 18) {
    alert("Sorry, you are not yet allowed to visit this website!");
} 
if ( number > 22) {
    alert("Welcome, " + name);
} 

else {
   if (confirm("You sure you want to continue?")) {
   alert("Welcome, " + name)
   } else {
    alert("Sorry, you are not allowed to visit this website");
 }
}
