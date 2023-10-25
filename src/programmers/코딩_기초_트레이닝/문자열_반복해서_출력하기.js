/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/181950
 *
 * 이번에 알게 된 것:
 * repeat 메서드 사용하지말고 for 문으로만 한번 풀어봐야겠다.
 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]);
  console.log(str.repeat(n));
});
