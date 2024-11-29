"use strict";
let IF = "-------- 인터페이스 ---------";
let SP = "------ 선택적 프로퍼티 ------";
let RP = "------- 읽기 프로퍼티 -------";
let EPC = "----- 초과 프로퍼티 검사 -----";
let FT = "-------- 함수 타입 --------";
let IT = "--------- 인덱서블 타입 --------";
let CT = "--------- 클래스 타입 --------";
let EI = "-------- 인터페이스 확장 -------";
let SI = "------- 스테틱과 인스턴스 ------";
let HT = "-------- 하이브리드 타입 -------";
let CEI = "---- 클래스 확장 인터페이스 ----";
console.log(IF);
function printLabel(labelObj) {
    console.log(labelObj.label);
}
let myObj = { size: 10, label: "size 10 object" }; // labelValue 타입으로 정의
printLabel({ label: myObj });
console.log(SP);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
console.log(RP);
let x1 = { x: "number", y: 123 };
// x1.x = "apb"; // 오류
// x1.y = 5; // 오류
console.log(x1);
let a = [1, 2, 3, 4];
let arr = a;
console.log(arr);
console.log(EPC);
function createSquare2(config) {
    const color = config.color || "white";
    const width = config.width || 10;
    const area = width * width;
    return { color, area };
}
// let mySquare = createSquare({ colour: "red", width: 100 }); // 현재상태 오류 발생
// let mySquare2 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig);
let squareOptions = { color: "red", width: 200 };
let Square = createSquare(squareOptions);
console.log(Square);
console.log(FT);
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
function operate(a, b, operation) {
    return operation(a, b);
}
// 출력 결과
console.log(add(5, 3)); // 출력: 8
console.log(subtract(5, 3)); // 출력: 2
const calculator = {
    name: "Simple Calculator",
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};
// 출력 결과
console.log(calculator.name); // 출력: "Simple Calculator"
console.log(calculator.add(10, 5)); // 출력: 15
console.log(calculator.subtract(10, 5)); // 출력: 5
console.log(IT);
let myArray = ["Hello", "World"]; // 0번 인덱스 "Hello", 1번 인덱스 "World" 
console.log(myArray[0]); // 출력: "Hello"
let myDictionary = { length: 5, width: 10 };
console.log(myDictionary["length"]); // 출력: 5
// 주의 : 키 타입은 string 또는 number만 허용
console.log(CT);
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
const employee = new Employee("Alice", 30);
employee.greet(); // Hello, my name is Alice and I am 30 years old.
console.log(EI);
let square = {};
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
class MyClass {
    static staticMethod() {
        console.log("This is a static method.");
    }
}
MyClass.staticProperty = "I belong to the class!";
console.log(MyClass.staticProperty); // I belong to the class!
MyClass.staticMethod(); // This is a static method.
// 인스턴스
class MyClass2 {
    constructor() {
        this.instanceProperty = "I belong to an instance!";
    }
    instanceMethod() {
        console.log("This is an instance method.");
    }
}
const instance = new MyClass2();
console.log(instance.instanceProperty); // I belong to an instance!
instance.instanceMethod(); // This is an instance method.
console.log(HT);
function getCounter() {
    const counter = ((start) => `Count starts from ${start}`);
    counter.interval = 1000;
    counter.reset = () => {
        console.log("Counter reset!");
    };
    return counter;
}
const counter = getCounter();
console.log(counter(5)); // Count starts from 5
console.log(counter.interval); // 1000
counter.reset(); // Counter reset!
console.log(CEI);
//  클래스 확장 인터페이스 
// 클래스에서 상속한 필드와 메서드 타입을 인터페이스가 받아들여, 
// 그 클래스의 구조를 기반으로 한 인터페이스를 정의할 수 있는 기능
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
class Dog {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
    }
    makeSound() {
        console.log(`${this.name} barks!`);
    }
    play() {
        console.log(`${this.name} is playing with ${this.owner}.`);
    }
}
// 사용 예시
const myDog = new Dog("Buddy", "Alice");
myDog.makeSound(); // Buddy barks!
myDog.play(); // Buddy is playing with Alice.
