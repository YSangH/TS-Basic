var IF = "-------- 인터페이스 ---------";
var SP = "------ 선택적 프로퍼티 ------";
var RP = "------- 읽기 프로퍼티 -------";
var EPC = "----- 초과 프로퍼티 검사 -----";
var FT = "-------- 함수 타입 --------";
var IT = "--------- 인덱서블 타입 --------";
var CT = "--------- 클래스 타입 --------";
var EI = "-------- 인터페이스 확장 -------";
var SI = "------- 스테틱과 인스턴스 ------";
var HT = "-------- 하이브리드 타입 -------";
var CEI = "---- 클래스 확장 인터페이스 ----";
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
console.log(CT);
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    return Employee;
}());
var employee = new Employee("Alice", 30);
employee.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(EI);
var square = {};
square.color = "red";
square.sideLength = 15;
console.log(square);
console.log(SI);
// 스테틱과 인스턴스의 차이
// 스태틱(static):
// 클래스 자체에 속합니다.
// 클래스 이름을 통해 직접 접근합니다.
// 인스턴스와 관련이 없습니다.
// 인스턴스(instance):
// 클래스의 인스턴스를 통해 접근합니다.
// 인스턴스마다 고유의 값을 가질 수 있습니다.
// 스테틱
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.staticMethod = function () {
        console.log("This is a static method.");
    };
    MyClass.staticProperty = "I belong to the class!";
    return MyClass;
}());
console.log(MyClass.staticProperty); // I belong to the class!
MyClass.staticMethod(); // This is a static method.
// 인스턴스
var MyClass2 = /** @class */ (function () {
    function MyClass2() {
        this.instanceProperty = "I belong to an instance!";
    }
    MyClass2.prototype.instanceMethod = function () {
        console.log("This is an instance method.");
    };
    return MyClass2;
}());
var instance = new MyClass2();
console.log(instance.instanceProperty); // I belong to an instance!
instance.instanceMethod(); // This is an instance method.
console.log(HT);
function getCounter() {
    var counter = (function (start) { return "Count starts from ".concat(start); });
    counter.interval = 1000;
    counter.reset = function () {
        console.log("Counter reset!");
    };
    return counter;
}
var counter = getCounter();
console.log(counter(5)); // Count starts from 5
console.log(counter.interval); // 1000
counter.reset(); // Counter reset!
console.log(CEI);
//  클래스 확장 인터페이스 
// 클래스에서 상속한 필드와 메서드 타입을 인터페이스가 받아들여, 
// 그 클래스의 구조를 기반으로 한 인터페이스를 정의할 수 있는 기능
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.makeSound = function () {
        console.log("".concat(this.name, " makes a sound."));
    };
    return Animal1;
}());
var Dog = /** @class */ (function () {
    function Dog(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " barks!"));
    };
    Dog.prototype.play = function () {
        console.log("".concat(this.name, " is playing with ").concat(this.owner, "."));
    };
    return Dog;
}());
// 사용 예시
var myDog = new Dog("Buddy", "Alice");
myDog.makeSound(); // Buddy barks!
myDog.play(); // Buddy is playing with Alice.
