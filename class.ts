const Class = "---- 클래스 ----"; 
const Inheritance = "---- 상속 ----"; 
const AccessController = "---- 접근제어자 ----";
const ReadonlyModifier = "---- 읽기전용 지정자 ----";
const ParameterProperties = "---- 매개변수 프로퍼티 ----";
const Accessors = "---- 접근자 ----";
const StaticProperties = "---- 전역 프로퍼티 ----";
const Abstract = "---- 추상 메서드 ----";
const ConstructorFunctions = "---- 생성자 함수 ----"; 

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


console.log(Accessors);
// 접근자
// 객체의 멤버에 대한 접근을 가로채는 방식으로 getters/setters를 지원

class Hero {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public set name(newName: string) {
    if (newName.length > 0) {
      this._name = newName;
    } else {
      throw new Error('Name cannot be empty');
    }
  }
}

const hero = new Hero('Iron Man');
console.log(hero.name); // Iron Man
hero.name = 'Spider Man'; // Setter 호출
console.log(hero.name); // Spider Man

console.log(StaticProperties);
// 전역 프로퍼티
// 특정 스코프에 속하지 않고 어디서든 접근 가능한 변수를 의미

class MyStaticClass {
  static staticProperty: string = "I am static!";

  static staticMethod() {
    console.log(`Static Property: ${this.staticProperty}`);
  }
}

// Accessing static properties and methods
console.log(MyStaticClass.staticProperty); // "I am static!"
MyStaticClass.staticMethod(); // "Static Property: I am static!"


console.log(Abstract);
// 추상메서드
// abstract 키워드 사용:
// abstract 키워드로 클래스 또는 메서드를 선언

// 추상 메서드는 선언만 하고, 구체적인 구현은 하위 클래스에서 작성

// 인스턴스화 불가:
// 추상 클래스 자체로는 객체를 생성 불가

// 상속 및 구현 강제:
// 추상 클래스는 하위 클래스에서 반드시 구현해야 할 메서드나 속성을 정의

abstract class character {
  abstract action(): void; // 추상 메서드 (구현 없음)

  move(): void {
    console.log("Moving...");
  }
}

class Archor extends character {
  action(): void {
    console.log("attack!");
  }
}

const archor = new Archor();
archor.action(); // "attack!"
archor.move(); // "Moving..."

// const animal = new Animal(); // 에러: 추상 클래스는 인스턴스화할 수 없습니다.

console.log(ConstructorFunctions);
// 생성자 함수
// 클래스의 인스턴스를 초기화하기 위해 호출되는 특수한 메서드
// constructor 키워드를 사용하여 정의
// 객체 생성 시 필요한 초기값을 설정 및 초기 로직을 실행

// 특징
// 클래스의 인스턴스 생성 시 자동 호출
// 단 한 번만 실행되며, 객체 초기화 역할
// 매개변수를 통해 인스턴스를 생성할 때 필요한 값을 전달받음

class Stone {
  name: string;
  hardness: string;

  constructor(name: string, hardness: string) {
    this.name = name; // 인스턴스 변수 초기화
    this.hardness = hardness;
  }

  StoneInfo(): void {
    console.log(`stone : ${this.name} , hardness : ${this.hardness}.`);
  }
}

const myStone = new Stone("Garnet", "7.0"); // 생성자 호출
myStone.StoneInfo(); // This car is a Toyota from 2022.
