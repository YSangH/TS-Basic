var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var U = "---- 유니온 타입 ----";
var UWCF = "---- 공통 필드 유니온 ----";
var DU = "---- 유니온 구별 ----";
var IST = "---- 교차 타입 ----";
var MV = "---- 교차 믹스인 ----";
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
console.log(IST);
var personal = {
    name: "Alice",
    age: 30,
};
// 주의
// 교차 타입은 겹치는 속성이 있을 경우 공통적인 타입으로 좁혀짐
// 호환되지 않는 타입을 결합하면 오류가 발생
// 에러 경우
// type C = { value: string };
// type D = { value: number };
// // 오류 발생: string과 number는 교차 불가
// type CD = C & D;
console.log(MV);
var flyMixin = {
    fly: function () { return console.log("Flying!"); },
};
var swimMixin = {
    swim: function () { return console.log("Swimming!"); },
};
// 교차 타입 생성
var flyingFish = __assign(__assign({}, flyMixin), swimMixin);
flyingFish.fly(); // Flying!
flyingFish.swim(); // Swimming!
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.walk = function () {
        console.log("Walking!");
    };
    animal.prototype.run = function () {
        console.log("Running!");
    };
    return animal;
}());
var dog = new animal();
dog.walk(); // Walking!
dog.run(); // Running!
function Eater(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.eat = function () {
            console.log("Eating!");
        };
        return class_1;
    }(Base));
}
function Sleeper(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.sleep = function () {
            console.log("Sleeping!");
        };
        return class_2;
    }(Base));
}
var Personal = /** @class */ (function () {
    function Personal() {
    }
    return Personal;
}());
var MixedPerson = Sleeper(Eater(Personal));
var human = new MixedPerson();
human.eat(); // Eating!
human.sleep(); // Sleeping!
