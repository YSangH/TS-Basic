let IF = "-------- 인터페이스 ---------";
let SP = "------ 선택적 프로퍼티 ------";
let RP = "------- 읽기 프로퍼티 -------";
let EPC = "----- 초과 프로퍼티 검사 -----";
let FT = "-------- 함수 타입 --------";
let IT = "--------- 인덱서블 타입 --------";

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
