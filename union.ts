const U = "---- 유니온 타입 ----";

console.log(U);
// 하나 이상의 타입을 허용하는 타입입니다.
// 변수, 함수 매개변수, 반환값 등에 대해 서로 다른 여러 타입을 지정

// 기본문법
let val: string | number;

val = "안녕하세요"; // 문자열 허용
val = 123;          // 숫자 허용
// 값 = true;      // 오류: 'boolean'은 허용되지 않음
console.log(val);