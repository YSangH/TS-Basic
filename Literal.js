var LN = "---- 리터럴 타입 좁히기 ----";
var SLT = "---- 문자열 리터럴 타입 ----";
var NLT = "---- 숫자형 리터럴 타입 ----";
console.log(LN);
// 리터럴 타입 좁히기
// var이나 let으로 변수 선언시 컴파일러에게 변경 될 가능성이 있음을 알림
// 하지만 const로 변수 선언시 해당 객체는 변하지 않음을 알린다.
var hi = "Hi"; // 문자열 선언
var hello = "Hello"; // Hello World이라는 타입으로 선언
console.log(hi);
console.log(hello);
console.log(SLT);
function move(direction) {
    console.log("".concat(direction, "\uC73C\uB85C \uC774\uB3D9\uD569\uB2C8\uB2E4."));
}
move("left"); // 정상 동작
move("up"); // 정상 동작
function request(method, url) {
    console.log("HTTP request: ".concat(method, " ").concat(url));
}
request("GET", "/api/data"); // 정상
var currentStatus = "wait";
currentStatus = "In progress"; // 정상
// currentStatus = "중단"; // 오류: '"중단"'은 '상태' 타입에 포함되지 않음
console.log(currentStatus);
var myButton = {
    label: "클릭하세요",
    size: "medium",
};
console.log(myButton.size + " 크기의 버튼을 " + myButton.label);
console.log(NLT);
function tumble(result) {
    console.log("\uC8FC\uC0AC\uC704 \uAC12\uC740 ".concat(result, "\uC785\uB2C8\uB2E4."));
}
tumble(3); // 정상 동작
// tumble(7); // 오류: '7'은 '주사위값' 타입에 포함되지 않음
