var IF = "-------- 인터페이스 ---------";
var SP = "------ 선택적 프로퍼티 ------";
var RP = "------- 읽기 프로퍼티 -------";
var EPC = "----- 초과 프로퍼티 검사 -----";
var FT = "-------- 함수 타입 --------";
var IT = "--------- 인덱서블 타입 --------";
console.log(IF);
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: "size 10 object" }; // labelValue 타입으로 정의
printLabel({ label: myObj });
console.log(SP);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
console.log(RP);
var x1 = { x: "number", y: 123 };
// x1.x = "apb"; // 오류
// x1.y = 5; // 오류
console.log(x1);
var a = [1, 2, 3, 4];
var arr = a;
console.log(arr);
console.log(EPC);
function createSquare2(config) {
    var color = config.color || "white";
    var width = config.width || 10;
    var area = width * width;
    return { color: color, area: area };
}
// let mySquare = createSquare({ colour: "red", width: 100 }); // 현재상태 오류 발생
// let mySquare2 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig);
var squareOptions = { color: "red", width: 200 };
var Square = createSquare(squareOptions);
console.log(Square);
console.log(FT);
var add = function (x, y) { return x + y; };
var subtract = function (x, y) { return x - y; };
function operate(a, b, operation) {
    return operation(a, b);
}
// 출력 결과
console.log(add(5, 3)); // 출력: 8
console.log(subtract(5, 3)); // 출력: 2
var calculator = {
    name: "Simple Calculator",
    add: function (x, y) { return x + y; },
    subtract: function (x, y) { return x - y; },
};
// 출력 결과
console.log(calculator.name); // 출력: "Simple Calculator"
console.log(calculator.add(10, 5)); // 출력: 15
console.log(calculator.subtract(10, 5)); // 출력: 5
console.log(IT);
var myArray = ["Hello", "World"]; // 0번 인덱스 "Hello", 1번 인덱스 "World" 
console.log(myArray[0]); // 출력: "Hello"
var myDictionary = { length: 5, width: 10 };
console.log(myDictionary["length"]); // 출력: 5
// 주의 : 키 타입은 string 또는 number만 허용
