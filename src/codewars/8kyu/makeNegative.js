/**
 *  https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 * 
 * 	- 숫자를 어떻게 음수화 시키지? 
 */

function makeNegative(num) {
  if (num > 0) {
    return Number('-' + num.toString());
  } else {
    return num;
  }
}

/**
 *  더 나은 버전 
 * - 알게 된 것:
 * `Math.abs`: 숫자를 양수화하는 메서드
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 */

function makeNegative(num) {
  return -Math.abs(num);
}
