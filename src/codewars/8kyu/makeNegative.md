[Return Negative](https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript)
  
## 처음 답변
- 숫자를 어떻게 음수화 시키지? 
  - 양수화를 시키고 음수화를 시켜도 된다.
  - 멍청했다! 그리고 -1 을 그냥 곱해도 된다.

```js
function makeNegative(num) {
  if (num > 0) {
    return Number('-' + num.toString());
  } else {
    return num;
  }
}
```

## 더 나은 버전 
- 알게 된 것:
 [`Math.abs`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs): 숫자를 양수화하는 메서드
```js
function makeNegative(num) {
  return -Math.abs(num);
}
```

```js
function makeNegative(num) {
  if(num < 0) {
      return num
  } else {
    return num * -1 
  }
}
```