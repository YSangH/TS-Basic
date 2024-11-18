const F = "--------- 함수 ---------";
const TF = "------ 함수의 타이핑 ------";
const WF = "------ 함수 타입 작성 ------";

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
