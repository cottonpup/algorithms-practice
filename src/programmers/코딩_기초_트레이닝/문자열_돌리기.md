# [문자열 돌리기](https://school.programmers.co.kr/learn/courses/30/lessons/181945)

```js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i = 0; i < str.length; i++){
        console.log(str[i])
    }
});
```
알게된 점
- forEach는 문자열에는 사용이 불가능하다. 배열에만 가능하다.