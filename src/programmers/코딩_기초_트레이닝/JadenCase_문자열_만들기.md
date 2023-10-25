# [JadenCase 문자열 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/12951)
**포기**
런타임 에러가 걸림.. 왜 일까?

>추가적으로 말씀을 드리자면 문제에서 "s는 알파벳과 공백문자(" ")로 이루어져 있습니다."라고 나와있는 것으로 보아 테스트케이스 중에서 연속된 '공백'이 있을 것으로 판단됩니다. 그럼 공백을 기준으로 split을 하게 되면 '빈 문자열'이 요소로 있는 경우가 생기구요, 해당 요소를 배열 인덱스로 접근할 경우 undefined를 반환하기 때문에 toUpperCase()에서 런타임 오류가 발생하는 것입니다. :)

> 윗분 말씀대로인거 같아요. 이 문제로 v[0]에서 문제가 생기더라구요. 빈 문자열인데 0번째 인덱스 접근이라 문제생기는듯

> charAt과 인덱스 접근의 차이를 다시 한 번 생각하게 되네요. 감사합니다

### 나의 답변
```js
function solution(s) {

    let answer = [];
    s.split(' ').forEach(letter => {
        answer.push(letter.charAt(0).toUpperCase() + letter.substring(1).toLowerCase())
    })

    return answer.join(' ')

}
```

### Reference
- https://dev.to/charlesamakoye/three-ways-of-accessing-string-characters-in-javascript-3gbn

#### 알게 된 것
- string 을 대괄호로 접근하든 `charAt`으로 접근하든 새로운 string으로 반환하는 것은 똑같다.
- string 을 대괄호로 접근할 때 인덱스가 string 범위 밖에 있으면 `undefined` 를 반환한다.
- string 을 `charAt`로 접근할 때 범위 밖에 있으면 빈 문자열('')을 반환한다. 

#### 아직 의문인 점
- 테스트 케이스에 연속공백문자를 넣었을 때 통과가 되지 않음.
