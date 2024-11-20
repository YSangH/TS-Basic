var F = "--------- 함수 ---------";
var TF = "------ 함수의 타이핑 ------";
var WF = "------ 함수 타입 작성 ------";
var ITT = "------ 타입의 추론 ------";
var ODP = "-- 선택적&기본 매개변수 --";
var RPS = "---- 나머지 매개변수 ----";
var TA = "---- this와 화살표함수 ----";
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
// 각 파라미터와 함수 자신의 반환될 타입을 지정
function Add(x, y) {
    return x + y;
}
;
var myAdd = function (x, y) {
    return x + y;
};
console.log(Add(5, 6));
console.log(myAdd(2, 4));
console.log(WF);
// 함수 타입 작성
// 함수의 타입은 매개변수의 타입과 반환 타입이 있다.
// 전체함수 타입을 작성하기 위해 두 가지 타입이 필요하다.
var Sub = function (x, y) { return x - y; };
var mySub = function (x, y) { return x - y; };
console.log(Sub(5, 6));
console.log(mySub(2, 4));
console.log(ITT);
// 타입의 추론
// 타입을 명시적으로 지정하지 않아도, 컴파일러가 코드의 문맥과 구조를 분석하여
//변수, 함수 반환값, 매개변수 등의 타입을 자동으로 결정하는 기능
//1. 기본 타입 추론
var num = 42; // number로 추론
var str = "Hello, TypeScript"; // string으로 추론
var Done = false; // boolean으로 추론
console.log(num, str, Done);
// 2. 함수 반환값 타입 추론
function div(a, b) {
    return a / b; // 반환값은 number로 추론
}
console.log(div(6, 2));
// 3. 컨텍스트 기반 타입 추론
var numbers = [1, 2, 3];
numbers.forEach(function (num) {
    console.log(num); // num은 number로 추론
});
// 4. 객체와 배열의 타입 추론
var user = {
    name: "Alice",
    age: 25,
}; // { name: string; age: number }
var colors = ["red", "green", "blue"]; // string[]
console.log(user);
console.log(colors);
// 한계와 해결방안
// 1. 명확한 타입 지정
// 타입 선언 전
var Value; // any로 추론
Value = 10; // number 할당 가능
Value = "hello"; // string도 할당 가능
// 콘솔 출력시 제일 나중에 할당한 hello출력
// 명시적으로 타입 선언
var specificValue;
specificValue = "hello"; // string만 할당 가능
console.log(Value, specificValue);
// 2. 유니온 타입
var mixed = Math.random() > 0.5 ? "hello" : 42; // string | number
console.log(mixed);
console.log(ODP);
// 선택적 매개변수와 기본 매개변수
// 선택적 매개변수를 원한다면 매개변수 이름 끝에 ? 를 붙여서 선언
// function buildName(firstName: string, lastName?: string) {
//     return firstName + " " + lastName;
// }
// 기본값은 함수 선언 시 = 뒤에 선언
// undefined에 전달
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Charlie"; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // 오류, 너무 적은 매개변수
var result2 = buildName("Bob", undefined); // 오류, 너무 적은 매개변수
var result3 = buildName("Bob", "Adams", "Sr."); // 오류, 너무 많은 매개변수
var result4 = buildName("Bob", "Adams"); // 정확함
console.log(result1, result2, result3, result4);
// result1은 Bob undefined,
// result2는 Bob Adams값이 나오지만 두가지의 매개변수만 필요하기 때문에 세번째 매개변수인 Sr.은 출력되지 않는다.
console.log(RPS);
// 나머지 매개변수
// 함수 호출 시 전달되는 나머지 인수를 배열 형태로 수집하는 데 사용
// 기본 문법
// function 함수이름(필수매개변수: 타입, ...나머지매개변수: 타입[]) {
//   // 함수 본문
// }
// 1. 숫자 합산 함수
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
console.log(sum(1, 2, 3, 4)); // 출력: 10
console.log(sum()); // 출력: 0
// 2. 문자열 연결 함수
function concatenate(separator) {
    var strings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        strings[_i - 1] = arguments[_i];
    }
    return strings.join(separator);
}
console.log(concatenate(", ", "apple", "banana", "cherry")); // 출력: "apple, banana, cherry"
console.log(concatenate(" - ", "React", "TypeScript")); // 출력: "React - TypeScript"
// 3. 혼합된 매개변수 처리
function greet(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    names.forEach(function (name) {
        console.log("".concat(greeting, ", ").concat(name, "!"));
    });
}
greet("Hello", "Alice", "Bob", "Charlie");
// 출력:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!
console.log(TA);
// this 기본 동작
// this는 함수가 호출된 컨텍스트(문맥)에 따라 값이 결정, 타입스크립트에서도 동일하게 동작
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
    }
    Person1.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, "."));
    };
    return Person1;
}());
var person1 = new Person1("Alice");
person1.greet(); // "Hello, my name is Alice."
// 2. 화살표 함수와 this
// 화살표 함수는 렉시컬 바인딩 사용
// * 렉시컬 바인딩은 프로그래밍 언어에서 변수의 스코프가 변수 선언 위치에 따라 결정되고, 코드가 작성된 구조에 따라 바인딩되는 방식
// this는 화살표 함수가 선언된 위치에서의 this 값을 그대로 유지
var Person = /** @class */ (function () {
    function Person(name) {
        var _this = this;
        this.greet1 = function () {
            console.log("Hello, my name is ".concat(_this.name, "."));
        };
        this.name = name;
    }
    return Person;
}());
var person = new Person("Alice");
var unboundGreet = person.greet1;
unboundGreet(); // "Hello, my name is Alice."
// 3. 타입스크립트에서 this 명시
function showInfo() {
    console.log("Name: ".concat(this.name, ", Age: ").concat(this.age));
}
var userInfo = { name: "Bob", age: 30 };
// call을 통해 this 바인딩
showInfo.call(userInfo); // 출력: "Name: Bob, Age: 30"
// showInfo(); // 오류: 'this'가 명시된 타입에 맞지 않음
// 4. 화살표 함수와 일반 함수의 혼합 사용
var Button = /** @class */ (function () {
    function Button(label) {
        var _this = this;
        this.handleClick = function () {
            console.log("Button clicked: ".concat(_this.label));
        };
        this.label = label;
    }
    return Button;
}());
var button = new Button("Submit");
var callback = button.handleClick;
callback(); // "Button clicked: Submit"
