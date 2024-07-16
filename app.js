// check the string is pallindrom or not

const string = "madam";

function isPallindrome(str){
  return str.split("").reverse().join("") === str;
}

console.log(isPallindrome(string));