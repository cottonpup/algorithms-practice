/**
 * 
 * https://school.programmers.co.kr/learn/courses/30/lessons/181951
 * 
 * 이번에 알게 된 것:
 * 잘 모르겠으면 일단 콘솔에 찍어보자!
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
  console.log('a = ' + Number(input[0]));
  console.log('b = ' + Number(input[1]));
});