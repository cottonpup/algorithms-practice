 # [문자열 내 p와 y의 개수](https://programmers.co.kr/learn/courses/30/lessons/12916)
 
 From a given `string`, it returns `true` if there are as many `p` as `y` characters, otherwise it returns `false`.

 ```js
function countCharacters(s) {
  let counterOfP = 0;
  let counterOfY = 0;

  for (let char of s) {
    if (char === 'p' || char === 'P') {
      counterOfP++;
    }
    if (char === 'y' || char === 'Y') {
      counterOfY++;
    }
  }

  return counterOfP === counterOfY;
}
 ```
