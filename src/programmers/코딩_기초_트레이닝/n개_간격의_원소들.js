/**
 * 
 * https://school.programmers.co.kr/learn/courses/30/lessons/181888
 * 
 * 
 */

function solution(num_list, n) {
  let answer = [];
  for (let i = 0; i < num_list.length; i++) {
    if (n * i < num_list.length) {
      answer.push(num_list[n * i]);
    }
  }
  return answer;
}
