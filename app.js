// Find the length of the longest word in a sentence and its length

function longestWord(str) {
  return str
    .split(" ")
    .reduce(
      (prev, curr) =>
        prev.length < curr.length ? { word: curr, length: curr.length } : prev,
      { word: "", length: 0 }
    );
}

let sentence = "The quick brown fox jumped over the lazy dog";

console.log(longestWord(sentence));
