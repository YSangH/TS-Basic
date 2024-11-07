let IF = "-------- 인터페이스 ---------";
let SP = "------ 선택적 프로퍼티 ------";


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