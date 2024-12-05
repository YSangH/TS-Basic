var Generic = "-- 제네릭 --";
console.log(Generic);
// 제너릭
// 함수, 클래스, 또는 인터페이스가 다양한 타입에서 동작할 수 있도록 만드는 방법
// 함수
function identity(value) {
    return value;
}
// 사용 예시
var numberValue = identity(10); // number
var stringValue = identity("hello"); // string
// 타입 추론으로 생략 가능
var inferredValue = identity(true); // boolean
// 클래스
var Box = /** @class */ (function () {
    function Box(contents) {
        this.contents = contents;
    }
    Box.prototype.getContents = function () {
        return this.contents;
    };
    return Box;
}());
// 사용 예시
var numberBox = new Box(123);
console.log(numberBox.getContents()); // 123
var stringBox = new Box("hello");
console.log(stringBox.getContents()); // "hello"
