const Class = "---- 클래스 ----"; 
const Inheritance = "---- 상속 ----"; 

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
