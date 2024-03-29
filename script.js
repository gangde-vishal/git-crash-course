function reverseStr(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
}
console.log(reverseStr("vishal"));

function mergeArray(arr1, arr2) {
  let merge = [...arr1, ...arr2];
  return merge.sort((a, b) => a - b);
}
console.log(mergeArray([0, 3, 6], [4, 8, 10, 12]));

function findLongestWord(sentence) {
  let longest = "",
    maxLength = 0;
  let words = sentence.split(" ");
  for (let word of words) {
    if (word.length > maxLength) {
      longest = word;
      maxLength = word.length;
    }
  }
  return longest;
}
console.log(findLongestWord("Today I have learned git and github"));
