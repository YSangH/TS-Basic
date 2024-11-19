const F = "--------- 함수 ---------";
const TF = "------ 함수의 타이핑 ------";
const WF = "------ 함수 타입 작성 ------";
const ITT = "------ 타입의 추론 ------";
const ODP = "-- 선택적&기본 매개변수 --";


console.log(F);
// 함수
// 기명 함수
// function plus(x, y){
    // return x + y;
// };
// 익명 함수
// let myPlus = function (x, y) { return x + y };
// const z = 100;
// function plus(x, y){
//     return x + y + z;
// };
// console.log(plus(3, 6, 100));
// 타입을 따로 지정하지 않고, 매개 변수에 z가 없으므로 위 코드는 에러가 발생
console.log("error");


console.log(TF);
// 함수의 타이핑 
// 각 파라미터와 함수 자신의 반활될 타입을 지정
function Add(x: number, y: number): number {
    return x + y
};

let myAdd = function (x: number, y: number): number {
    return x + y
};
console.log(Add(5, 6));
console.log(myAdd(2, 4));

console.log(WF);
// 함수 타입 작성
// 함수의 타입은 매개변수의 타입과 반환 타입이 있다.
// 전체함수 타입을 작성하기 위해 두 가지 타입이 필요하다.
let Sub: (x: number, y: number) => number =
    function(x: number, y: number): number { return x - y; };

let mySub: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x - y; };

console.log(Sub(5, 6));
console.log(mySub(2, 4));    

console.log(ITT);
// 타입의 추론
// 타입을 명시적으로 지정하지 않아도, 컴파일러가 코드의 문맥과 구조를 분석하여
//변수, 함수 반환값, 매개변수 등의 타입을 자동으로 결정하는 기능

//1. 기본 타입 추론
let num = 42; // number로 추론
let str = "Hello, TypeScript"; // string으로 추론
let Done = false; // boolean으로 추론
console.log(num, str, Done);

// 2. 함수 반환값 타입 추론
function div(a: number, b: number) {
  return a / b; // 반환값은 number로 추론
}
console.log(div(6, 2));

// 3. 컨텍스트 기반 타입 추론
const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num); // num은 number로 추론
});

// 4. 객체와 배열의 타입 추론
const user = {
  name: "Alice",
  age: 25,
}; // { name: string; age: number }
const colors = ["red", "green", "blue"]; // string[]

console.log(user);
console.log(colors);

// 한계와 해결방안

// 1. 명확한 타입 지정
// 타입 선언 전
let Value; // any로 추론
Value = 10; // number 할당 가능
Value = "hello"; // string도 할당 가능
// 콘솔 출력시 제일 나중에 할당한 hello출력

// 명시적으로 타입 선언
let specificValue: string;
specificValue = "hello"; // string만 할당 가능

console.log(Value, specificValue);

// 2. 유니온 타입
let mixed = Math.random() > 0.5 ? "hello" : 42; // string | number
console.log(mixed);

console.log(ODP);
// 선택적 매개변수를 원한다면 매개변수 이름 끝에 ? 를 붙여서 선언

// function buildName(firstName: string, lastName?: string) {
//     return firstName + " " + lastName;
// }

// 기본값은 함수 선언 시 = 뒤에 선언
// undefined에 전달
function buildName(firstName: string, lastName = "Charlie") {
    return firstName + " " + lastName;
}

let result1 = buildName("Bob");                  // 오류, 너무 적은 매개변수
let result2 = buildName("Bob", undefined);                  // 오류, 너무 적은 매개변수
let result3 = buildName("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result4 = buildName("Bob", "Adams");         // 정확함

console.log(result1, result2, result3, result4);
// result1은 Bob undefined, 
// result2는 Bob Adams값이 나오지만 두가지의 매개변수만 필요하기 때문에 세번째 매개변수인 Sr.은 출력되지 않는다.


