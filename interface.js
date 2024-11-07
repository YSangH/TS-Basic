var IF = "-------- 인터페이스 ---------";
var SP = "------ 선택적 프로퍼티 ------";
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
