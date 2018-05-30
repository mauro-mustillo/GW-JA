let fullName = prompt("What's your name?"); //asking for user name
let colorOptions = prompt (" What's your favorite color? You can use only : red, orange, blue, yellow, green, grey, black, cyan, magenta, purple","Your favorite color option");
let toUppercase = colorOptions.toUpperCase(); // it converts all answers into UPPERCASE and allows to match the case
let nameToUppercase = fullName.toUpperCase(); // it converts all answers into UPPERCASE and allows to match the case
switch (toUppercase) {
  case 'RED':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because You're on Fire today!");
  break;
  case 'BLUE':
  alert(nameToUppercase  + "!"  + " You like the " + toUppercase +  " Because You Love the sea");
  break;
  case 'GREEN':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because You wish to be a Santa's Helper");
  break;
  case 'BLACK':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because You listen METAL all day!");
  break;
  case 'GREY':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because You're soooooo bored");
  break;
  case 'ORANGE':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because is the color of joy and creativity'");
  break;
  case 'CYAN':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because You're soooooo bored");
  break;
  case 'MAGENTA':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because You're soooooo bored");
  break;
  case 'PURPLE':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because you love to play Smoke on the Water on Guitar shops");
  break;
  case 'YELLOW':
  alert(nameToUppercase + "!"  + " You like the " + toUppercase +  " Because you work like a Minion");
  break;
  default:
  alert(nameToUppercase +  "!"   + " You should pay attention to what I am asking you! The color you choose is not allowed")
}
//console.log(colorOptions === "Red");
