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
// 인터페이스: 객체가 어떤 속성과 메서드를 가져야 하는지 지정
interface labelValue {
    size: number;
    label: string;
}

function printLabel(labelObj: { label: labelValue }) {
    console.log(labelObj.label);
}

let myObj: labelValue = { size: 10, label: "size 10 object" }; // labelValue 타입으로 정의
printLabel({ label: myObj });

console.log(SP);
// 선택적 프로퍼티 : 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달
// 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ?를 붙여 표시
interface SquareConfig {
    color?: string; // 색상명
    width?: number; // 둘레 수치
}

function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: "white", area: 100};
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
// 읽기 프로퍼티 : 할당 후 수정 불가인 속성, 앞에 readonly을 넣는다.
interface read{
    readonly x: string;
    readonly y: number;
}

let x1: read = { x: "number", y: 123 };
// x1.x = "apb"; // 오류
// x1.y = 5; // 오류
console.log(x1);

let a: number[] = [1, 2, 3, 4];
let arr: ReadonlyArray<number> = a;

console.log(arr);


console.log(EPC);
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any; // 추가 프로퍼티 허용
}

function createSquare2(config: SquareConfig): { color: string, area: number } {
    const color = config.color || "white";
    const width = config.width || 10;
    const area = width * width;
    return { color, area };
}

// let mySquare = createSquare({ colour: "red", width: 100 }); // 현재상태 오류 발생
// let mySquare2 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig);

let squareOptions = { color: "red", width: 200 } as SquareConfig;
let Square = createSquare(squareOptions);

console.log(Square);

console.log(FT);
// 기본 구문 : 함수의 매개변수와 반환 타입을 지정하는 호출 시그니처를 사용
 interface MathOperation {
    (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
const subtract: MathOperation = (x, y) => x - y;

function operate(a: number, b: number, operation: MathOperation): number {
    return operation(a, b);
}

// 출력 결과
console.log(add(5, 3)); // 출력: 8
console.log(subtract(5, 3)); // 출력: 2

// 응용
interface Calculator {
    name: string;   // 이름 타입
    add: MathOperation; // 더하기 타입
    subtract: MathOperation;    // 빼기 타입
}

const calculator: Calculator = {
    name: "Simple Calculator",
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
};

// 출력 결과
console.log(calculator.name); // 출력: "Simple Calculator"
console.log(calculator.add(10, 5)); // 출력: 15
console.log(calculator.subtract(10, 5)); // 출력: 5

console.log(IT);

//구문 : [key: KeyType]: ValueType 형태
interface StringArray {
    [index: number]: string; // 인덱스는 숫자, 키값은 문자
}

let myArray: StringArray = ["Hello", "World"]; // 0번 인덱스 "Hello", 1번 인덱스 "World" 
console.log(myArray[0]); // 출력: "Hello"

interface NumberDictionary {
    [key: string]: number; // 인덱스는 문자, 키값은 숫자
    length: number; // 추가적인 프로퍼티도 정의 가능
}

let myDictionary: NumberDictionary = { length: 5, width: 10 };
console.log(myDictionary["length"]); // 출력: 5

// 주의 : 키 타입은 string 또는 number만 허용

console.log(CT);
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const employee = new Employee("Alice", 30);
employee.greet(); // Hello, my name is Alice and I am 30 years old.

console.log(EI);
// 기존 인터페이스를 기반으로 새로운 속성이나 메서드를 추가하는 기능
interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let square = {} as Square;
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
  static staticProperty = "I belong to the class!";
  static staticMethod() {
    console.log("This is a static method.");
  }
}

console.log(MyClass.staticProperty); // I belong to the class!
MyClass.staticMethod(); // This is a static method.

// 인스턴스
class MyClass2 {
  instanceProperty = "I belong to an instance!";
  instanceMethod() {
    console.log("This is an instance method.");
  }
}

const instance = new MyClass2();
console.log(instance.instanceProperty); // I belong to an instance!
instance.instanceMethod(); // This is an instance method.


console.log(HT);
// 하이브리드 타입 : 나의 객체가 여러 형태를 가질 수 있도록 정의
interface Counter {
  (start: number): string; // 함수 시그니처
  interval: number;        // 속성
  reset(): void;           // 메서드
}

function getCounter(): Counter {
  const counter = ((start: number) => `Count starts from ${start}`) as Counter;
  counter.interval = 1000;
  counter.reset = () => {
    console.log("Counter reset!");
  };
  return counter;
}

const counter = getCounter();
console.log(counter(5));         // Count starts from 5
console.log(counter.interval);    // 1000
counter.reset();                  // Counter reset!

console.log(CEI);
//  클래스 확장 인터페이스 
// 클래스에서 상속한 필드와 메서드 타입을 인터페이스가 받아들여, 
// 그 클래스의 구조를 기반으로 한 인터페이스를 정의할 수 있는 기능

class Animal1 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound.`);
  }
}

interface Pet extends Animal1 {
  owner: string;
  play(): void;
}

class Dog implements Pet {
  name: string;
  owner: string;

  constructor(name: string, owner: string) {
    this.name = name;
    this.owner = owner;
  }

  makeSound(): void {
    console.log(`${this.name} barks!`);
  }

  play(): void {
    console.log(`${this.name} is playing with ${this.owner}.`);
  }
}

// 사용 예시
const myDog = new Dog("Buddy", "Alice");
myDog.makeSound(); // Buddy barks!
myDog.play();      // Buddy is playing with Alice.
