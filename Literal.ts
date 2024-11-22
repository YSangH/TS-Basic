const LN = "---- 리터럴 타입 좁히기 ----";
const SLT = "---- 문자열 리터럴 타입 ----";
const NLT = "---- 숫자형 리터럴 타입 ----";



console.log(LN);
// 리터럴 타입 좁히기
// var이나 let으로 변수 선언시 컴파일러에게 변경 될 가능성이 있음을 알림
// 하지만 const로 변수 선언시 해당 객체는 변하지 않음을 알린다.

let hi = "Hi";   // 문자열 선언
const hello = "Hello"; // Hello World이라는 타입으로 선언

console.log(hi);
console.log(hello);

console.log(SLT);
// 특정 문자열 값만 허용하도록 제한된 타입
type arrow = "left" | "right" | "up" | "down";

function move(direction: arrow) {
  console.log(`${direction}으로 이동합니다.`);
}

move("left"); // 정상 동작
move("up");   // 정상 동작
// move("front"); // 오류: '"front"'는 'arrow' 타입에 포함되지 않음

// 활용 예시
// 1. 함수의 인자 타입 정의
type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

function request(method: HTTPMethod, url: string) {
  console.log(`HTTP request: ${method} ${url}`);
}

request("GET", "/api/data"); // 정상
// 요청("PATCH", "/api/data"); // 오류: '"PATCH"'는 'HTTPMethod' 타입에 없음

// 2. 상태관리
type status = "wait" | "In progress" | "complate";

let currentStatus: status = "wait";
currentStatus = "In progress"; // 정상
// currentStatus = "중단"; // 오류: '"중단"'은 '상태' 타입에 포함되지 않음
console.log(currentStatus);

// 3. 객체 속성 타입 정의
type buttonSize = "small" | "medium" | "large";

interface button {
  label: string;
  size: buttonSize;
}

const myButton: button = {
  label: "클릭하세요",
  size: "medium",
};

console.log(myButton.size + " 크기의 버튼을 " + myButton.label);

console.log(NLT);
// 숫자형 리터널 타입
// 특정 숫자 값만 허용하도록 제한된 타입

type dice = 1 | 2 | 3 | 4 | 5 | 6;

function tumble(result: dice) {
  console.log(`주사위 값은 ${result}입니다.`);
}

tumble(3); // 정상 동작
// tumble(7); // 오류: '7'은 '주사위값' 타입에 포함되지 않음
