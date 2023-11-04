# [접미사인지 확인하기](https://school.programmers.co.kr/learn/courses/30/lessons/181908)

```js
function solution(my_string, is_suffix) {
    for(let i = 0; i < my_string.length; i++){
        if(my_string.substring(i) === is_suffix){
           return 1;
       }
    }
    
    return 0;
}
```
알게된 점
- `return my_string.substring(i) === is_suffix ? 1 : 0``
- 위 식을 for문 안에서 사용하고 있었는데 false여도 바로 반환한다는 걸 잊어 버렸다. 너무 어리석은 실수!