# [공배수](https://school.programmers.co.kr/learn/courses/30/lessons/181936) 

```js
function solution(number, n, m) {
    // number가 n의 배수이면서 m의 배수이면 1
    // 아니면 0
    if(number % n === 0 && number % m === 0){
        return 1;
    }
    
    return 0;
}
```