const Class = "---- 클래스 ----"; 
const Inheritance = "---- 상속 ----"; 
const AccessController = "---- 접근제어자 ----";
const ReadonlyModifier = "---- 읽기전용 지정자 ----";
const ParameterProperties = "---- 매개변수 프로퍼티 ----";

console.log(Class);
class Architecture {
  name: string; // 클래스 속성
  year: number;

  constructor(name: string, year: number) { // 생성자
    this.name = name;
    this.year = year;
  }

  profile(): string { // 메서드
    return ` 건물명 : ${this.name}, 건물년수 : ${this.year} `;
  }
}

// 클래스 사용
const architecture = new Architecture("63빌딩", 39);
console.log(architecture.profile()); // Hello, my name is Alice and I am 30 years old.

console.log(Inheritance);
// 상속
class Gun {
  constructor(public name: string) {}

  reload(): void {
    console.log(`${this.name}이 장전 되었습니다.`);
  }
}

class gun extends Gun {
  fire(): void {
    console.log(`${this.name}이 발사 되었습니다.`);
  }
}

// 사용 예시
const pistol = new gun("glock");
pistol.reload(); // glock이 장전 되었습니다.
pistol.fire(); // glock이 발사 되었습니다.

console.log(AccessController);
// 접근제어자

// public (기본값)
// 어디서나 접근 가능.
// 명시적으로 선언하지 않으면 모든 멤버는 기본적으로 public으로 설정됩니다.

class PublicExample {
    public name: string; // public 생략 가능
    constructor(name: string) {
        this.name = name;
    }
}
const PublicEx = new PublicExample("John");
console.log(PublicEx.name); // 접근 가능

// 2. private
// 클래스 내부에서만 접근 가능.
// 클래스 외부나 상속받은 클래스에서도 접근 불가.

class PrivateExample {
    private secret: string;
    constructor(secret: string) {
        this.secret = secret;
    }
    getSecret() {
        return this.secret; // 내부에서 접근 가능
    }
}
const PrivateEx = new PrivateExample("hidden");
console.log(PrivateEx.getSecret()); // 접근 가능
// console.log(ex.secret); // 오류: private 속성

// 3. protected
// 클래스 내부와 상속받은 클래스에서 접근 가능.
// 클래스 외부에서는 접근 불가.

class Parent {
    protected value: number;
    constructor(value: number) {
        this.value = value;
    }
}
class Child extends Parent {
    getValue() {
        return this.value; // 상속받은 클래스에서 접근 가능
    }
}
const child = new Child(42);
console.log(child.getValue()); // 접근 가능
// console.log(child.value); // 오류: protected 속성

console.log(ReadonlyModifier);
// 읽기전용 지정자
// 인터페이스에서 다뤘던 readonly로 프로퍼티를 읽기 전용으로 만들고
// 읽기 전용 프로퍼티는 선언 또는 생성자에서 초기화 

// 사용법:
// 1. 속성 선언 시 사용:

class ReadExample {
    readonly name: string;

    constructor(name: string) {
        this.name = name; // 초기화 가능
    }
}

const ReadEx = new ReadExample("Bread");
console.log(ReadEx.name); // "John"
// ex.name = "Doe"; // 오류: 읽기 전용 속성은 변경 불가

// 읽기 전용 배열:
// readonly를 배열에 적용해 배열의 변경(추가, 삭제 등)을 막는다.

const NumberArray: readonly number[] = [1, 2, 3];
// numbers.push(4); // 오류: 읽기 전용 배열은 변경 불가
console.log(NumberArray); // [ 1, 2, 3]
console.log(NumberArray[1]); // 2

console.log(ParameterProperties);
// 매개변수 프로퍼티
// 생성자의 매개변수에 접근 제어자(public, private, protected, readonly)를 추가해
// 클래스의 프로퍼티를 자동으로 선언 및 초기화하는 기능

class Food {
  name: string;
  kcal: number;

  constructor(name: string, kcal: number) {
    this.name = name;
    this.kcal = kcal;
  }
}
