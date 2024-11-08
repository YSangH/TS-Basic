var IF = "-------- 인터페이스 ---------";
var SP = "------ 선택적 프로퍼티 ------";
var RP = "------- 읽기 프로퍼티 -------";
var EPC = "----- 초과 프로퍼티 검사 -----";
console.log(IF);
function print(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: "size 10 object" };
print({ label: myObj });
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
    // ...
}
// let mySquare = createSquare({ colour: "red", width: 100 }); // 현재상태 오류 발생
var mySquare2 = createSquare2({ width: 100, opacity: 0.5 });
var squareOptions = { color: "red", width: 200 };
var Square = createSquare(squareOptions);
console.log(Square);
