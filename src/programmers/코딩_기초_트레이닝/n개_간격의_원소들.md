# [n개 간격의 원소들](https://school.programmers.co.kr/learn/courses/30/lessons/181888)

```js
function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i++) {
    if (n * i < num_list.length) {
      answer.push(num_list[n * i]);
    }
  }
  return answer;
}
```