/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181952
 * 
 * 이번에 알게 된 것:
 * 기본 입출력 readline 모듈에 대해서 모르는데 공부해야겠다.
 */

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
  console.log(str);
});
