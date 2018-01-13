function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
<<<<<<< HEAD
  console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper('HELLO');

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string) {
    return "I can\'t hear you!";
  } else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  } else if (string === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
=======
  return string.toUpperCase
}
console.log(string);
>>>>>>> 65cc81f2e848a0332da6abac4c9962c18fd2c7de
