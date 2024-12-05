const Generic = "-- 제네릭 --";
const Constraints = "-- 제네릭의 제약조건 --";

console.log(Generic);
// 제너릭
// 함수, 클래스, 또는 인터페이스가 다양한 타입에서 동작할 수 있도록 만드는 방법

// 함수
function identity<T>(value: T): T {
  return value;
}

// 사용 예시
const numberValue = identity<number>(10);  // number
const stringValue = identity<string>("hello"); // string

// 타입 추론으로 생략 가능
const inferredValue = identity(true); // boolean

// 클래스
class Box<T> {
  private contents: T;

  constructor(contents: T) {
    this.contents = contents;
  }

  getContents(): T {
    return this.contents;
  }
}

// 사용 예시
const numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // 123

const stringBox = new Box<string>("hello");
console.log(stringBox.getContents()); // "hello"

// 인터페이스 
interface Pair<T, U> {
  first: T;
  second: U;
}

// 사용 예시
const pair: Pair<string, number> = {
  first: "hello",
  second: 42,
};

console.log(pair.first);
console.log(pair.second);

console.log(Constraints);
// 제너릭의 제약 조건
// 특정 조건을 부여하여, 해당 조건을 만족하는 타입만 사용

// extends를 사용한 제약 조건
function printLength<T extends { length: number }>(item: T): void {
  console.log(item.length);
}

// 사용 예시
printLength("hello"); // 출력: 5
printLength([1, 2, 3]); // 출력: 3
// printLength(123); // 오류: number에는 length 속성이 없음


