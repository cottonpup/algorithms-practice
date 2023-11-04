# [뒤에서 5등 위로](https://school.programmers.co.kr/learn/courses/30/lessons/181852)

```js
function solution(num_list) {
    return num_list.sort((a, b) => a - b).slice(5)
}
```
알게된 점
- 배열을 자를 때는 `trim`이 아니라 `slice` 메서드를 사용한다.