# [대소문자 바꿔서 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181949)
- 대소문자 확인하는 방법에 대해 고민했는데, toUpperCase 혹은 toLowerCase 를 사용했을 때 값이 같은 지를 비교하면 됐다. 복잡하게 사고 할 필요가 없었다.               
                  
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close', function () {
  str = input[0];
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    answer +=
      str[i] === str[i].toUpperCase() ? str[i].toLowerCase() : str[i].toUpperCase();
  }
  console.log(answer);
});
