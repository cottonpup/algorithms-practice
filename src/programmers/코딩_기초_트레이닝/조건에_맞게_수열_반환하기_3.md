# [조건에 맞게 수열 반환하기 3](https://school.programmers.co.kr/learn/courses/30/lessons/181835)

```js
function solution(arr, k) {
    // k가 홀수 -> arr의 모든 원소 * k
    // k 가 짝수 -> arr의 모든 원소 + k
    var answer = [];
    arr.forEach(el => {
        answer.push(k % 2 === 0 ? el + k : el * k)
    })
    return answer;
}
```
알게된 점
- push를 저렇게 하지말고 좀 더 깔끔하게 빼는 법이 있을까?

더 나은 버전
```js
function solution(arr, k) {
  return arr.map(el => (k % 2 === 0 ? el + k : el * k));
}
```