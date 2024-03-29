// The length of the sentence (the number of characters)
function getLength(string) {
  var str = new String("Hello World! I am Maria, a FullStack Developer.");

  return str.length;
}
document.write(
  "The length of the sentence character -" +
    "Hello World! I am Maria, a FullStack Developer.:" +
    getLength("")
);
document.write("<br>");

// The number of words in the sentence (assuming that the words are separated by a single space)
function countWords(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");

  return str.split(" ").length;
}
document.write(
  "The Number of words in the sentence -" +
    "Hello World! I am Maria, a FullStack Developer.:" +
    countWords("Hello World! I am Maria, a FullStack Developer.")
);
document.write("<br>");

// The number of vowels in the sentence
function getVowels(string) {
  var Vowels = "aAeEiIoOuU";
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (Vowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
document.write(
  "The Number of vowels in -" +
    " Hello World! I am Maria, a FullStack Developer.:" +
    getVowels("Hello World! I am Maria, a FullStack Developer.")
);
