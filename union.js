var U = "---- 유니온 타입 ----";
var UWCF = "---- 공통 필드 유니온 ----";
var DU = "---- 유니온 구별 ----";
console.log(U);
// 하나 이상의 타입을 허용하는 타입입니다.
// 변수, 함수 매개변수, 반환값 등에 대해 서로 다른 여러 타입을 지정
// 기본문법
var val;
val = "안녕하세요"; // 문자열 허용
val = 123; // 숫자 허용
// 값 = true;      // 오류: 'boolean'은 허용되지 않음
console.log(val);
console.log(UWCF);
// 활용 
// 공통 필드로 타입 좁히기
function getCarInfo(car) {
    console.log("Car model: ".concat(car.model)); // 공통 필드 사용 가능
    if ('hyundai' in car) {
        console.log("This is a Taxi. model: ".concat(car.model));
    }
    else if ('kia' in car) {
        console.log("This is a Bus. model: ".concat(car.model));
    }
}
var taxi = { model: "sonata", hyundai: "taxi-model" };
var bus = { model: "granbird", kia: "bus-model" };
getCarInfo(taxi);
getCarInfo(bus);
console.log(DU);
// 구별하는 기준 : 공통된 속성 (해당 코드에서는 kind)
// 구별 방법 : switch
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            var circleArea = Math.PI * Math.pow(shape.radius, 2);
            console.log("Circle Area: ".concat(circleArea));
            return circleArea;
        case "square":
            return Math.pow(shape.sideLength, 2);
        case "rectangle":
            return shape.width * shape.height;
        //   efault 케이스의 never 타입: 유니온의 모든 멤버가 처리되었는지 확인하는 역할
        default:
            // TypeScript의 Exhaustiveness 체크
            var _exhaustive = shape;
            throw new Error("Unknown shape: ".concat(_exhaustive));
    }
}
// 잘못된 멤버가 있을 경우 컴파일 타임에 에러를 발생
getArea({ kind: "circle", radius: 5 });
// if문을 사용한 구별
function getShapeInfo(shape) {
    if (shape.kind === "circle") {
        var comment = "Circle with radius ".concat(shape.radius);
        console.log(comment);
        return comment;
    }
    else if (shape.kind === "square") {
        return "Square with side length ".concat(shape.sideLength);
    }
    else {
        // 자동으로 rectangle로 좁혀짐
        return "Rectangle with width ".concat(shape.width, " and height ").concat(shape.height);
    }
}
getShapeInfo({ kind: "circle", radius: 3 });
//  in 연산자 사용
function describeShape(shape) {
    if ("radius" in shape) {
        var message = "Circle with radius ".concat(shape.radius);
        console.log(message);
        return message;
    }
    else if ("sideLength" in shape) {
        return "Square with side length ".concat(shape.sideLength);
    }
    else {
        return "Rectangle with width ".concat(shape.width, " and height ").concat(shape.height);
    }
}
describeShape({ kind: "circle", radius: 7 });
// 커스텀 정의 타입
function isCircle(shape) {
    return shape.kind === "circle";
}
function getCircleInfo(shape) {
    if (isCircle(shape)) {
        return "Circle with radius ".concat(shape.radius);
    }
    return "Not a circle";
}
