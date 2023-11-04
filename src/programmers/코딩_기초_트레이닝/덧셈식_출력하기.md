# [덧셈식 출력하기](https://school.programmers.co.kr/learn/courses/30/lessons/181947)
```js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    console.log(`${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])}`)
})
```
알게된 점
- 출력문제는 미리 작성된 코드가 다른 값을 함께 출력하지 않는지 확인하자.
- `rl.on('line', function (line)` 와 `rl.on('close', function (line)`의 차이가 뭔지 궁금하다.