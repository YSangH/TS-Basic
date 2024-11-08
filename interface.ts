let IF = "-------- 인터페이스 ---------";
let SP = "------ 선택적 프로퍼티 ------";
let RP = "------- 읽기 프로퍼티 -------";
let EPC = "----- 초과 프로퍼티 검사 -----";

console.log(IF);
// 인터페이스: 객체가 어떤 속성과 메서드를 가져야 하는지 지정
interface labelValue{
    size: number;
    label: string;
}

function print(labelObj: { label: labelValue }) {
    console.log(labelObj.label);
}

let myObj = { size: 10, label: "size 10 object" };
print({ label: myObj });

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
    [propName: string]: any;
}

function createSquare2(config: SquareConfig): { color: string; area: number } {
    // ...
}

// let mySquare = createSquare({ colour: "red", width: 100 }); // 현재상태 오류 발생
let mySquare2 = createSquare2({ width: 100, opacity: 0.5 } as SquareConfig);

let squareOptions = { color: "red", width: 200 };
let Square = createSquare(squareOptions);

console.log(Square);