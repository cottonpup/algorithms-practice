/**
 * 
 * https://school.programmers.co.kr/learn/courses/30/lessons/181934
 * 
 * 이번에 알게 된 것:
 * - eval 함수를 사용할려고 했으나 eval 함수를 지양하라는 말이 공식문서에 적혀있어서 안썼다. eval 함수를 왜 지양해야하는지는 공부하면 좋을 거 같다. 
 * 
 */

function solution(ineq, eq, n, m) {
  let answer = 0;

  switch (ineq + eq) {
    case '<=':
      answer = n <= m ? 1 : 0;
      break;
    case '<!':
      answer = n < m && n !== m ? 1 : 0;
      break;
    case '>=':
      answer = n >= m ? 1 : 0;
      break;
    case '>!':
      answer = n > m && n !== m ? 1 : 0;
      break;
  }

  return answer;
}
