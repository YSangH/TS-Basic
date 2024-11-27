const U = "---- 유니온 타입 ----";
const UWCF = "---- 공통 필드 유니온 ----";
const DU = "---- 유니온 구별 ----";
const IST = "---- 교차 타입 ----";
const MV = "---- 교차 믹스인 ----";
    
console.log(U);
// 하나 이상의 타입을 허용하는 타입입니다.
// 변수, 함수 매개변수, 반환값 등에 대해 서로 다른 여러 타입을 지정

// 기본문법
let val: string | number;

val = "안녕하세요"; // 문자열 허용
val = 123;          // 숫자 허용
// 값 = true;      // 오류: 'boolean'은 허용되지 않음
console.log(val);

console.log(UWCF);
// 타입을 합칠 때 특정 필드나 속성이 공통적으로 존재하는 경우, 타입 간 관계를 정의하거나 유연한 타입을 생성
// 예시
type traffic= { model: string };
type taxi = traffic & { "hyundai": string };
type bus = traffic & { "kia": string };

type Car = taxi | bus;

// 활용 
// 공통 필드로 타입 좁히기
function getCarInfo(car: Car) {
  console.log(`Car model: ${car.model}`); // 공통 필드 사용 가능

  if ('hyundai' in car) {
    console.log(`This is a Taxi. model: ${car.model}`);
  } else if ('kia' in car) {
    console.log(`This is a Bus. model: ${car.model}`);
  }
}

const taxi: Car = { model: "sonata", hyundai: "taxi-model" };
const bus: Car = { model: "granbird", kia: "bus-model" };

getCarInfo(taxi);
getCarInfo(bus);

console.log(DU);
// 유니온 구별하기
type AngleShape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; sideLength: number }
  | { kind: "rectangle"; width: number; height: number };
// 구별하는 기준 : 공통된 속성 (해당 코드에서는 kind)

// 구별 방법 : switch
function getArea(shape: AngleShape): number {
  switch (shape.kind) {
    case "circle":
          const circleArea = Math.PI * shape.radius ** 2;
          console.log(`Circle Area: ${circleArea}`);
          return circleArea
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
    //   efault 케이스의 never 타입: 유니온의 모든 멤버가 처리되었는지 확인하는 역할
    default:
      // TypeScript의 Exhaustiveness 체크
      const _exhaustive: never = shape;
      throw new Error(`Unknown shape: ${_exhaustive}`);
  }
}
// 잘못된 멤버가 있을 경우 컴파일 타임에 에러를 발생
getArea({ kind: "circle", radius: 5 });

// if문을 사용한 구별
function getShapeInfo(shape: AngleShape): string {
  if (shape.kind === "circle") {
      const comment = `Circle with radius ${shape.radius}`;
      console.log(comment);
    return comment;
  } else if (shape.kind === "square") {
    return `Square with side length ${shape.sideLength}`;
  } else {
    // 자동으로 rectangle로 좁혀짐
    return `Rectangle with width ${shape.width} and height ${shape.height}`;
  }
}
getShapeInfo({ kind: "circle", radius: 3 });
//  in 연산자 사용
function describeShape(shape: AngleShape): string {
    if ("radius" in shape) {
        const message = `Circle with radius ${shape.radius}`;
        console.log(message);
        return message;
  } else if ("sideLength" in shape) {
    return `Square with side length ${shape.sideLength}`;
  } else {
    return `Rectangle with width ${shape.width} and height ${shape.height}`;
  }
}
describeShape({ kind: "circle", radius: 7 });

// 커스텀 정의 타입
function isCircle(shape: AngleShape): shape is { kind: "circle"; radius: number } {
  return shape.kind === "circle";
}

function getCircleInfo(shape: AngleShape): string {
  if (isCircle(shape)) {
    return `Circle with radius ${shape.radius}`;
  }
  return "Not a circle";
}

console.log(IST);
// 교차 타입
// 여러 타입을 하나로 결합하여 모든 속성을 동시에 포함하는 새로운 타입을 만드는 방식, & 연산자를 사용

type A = { name: string };
type B = { age: number };

type AB = A & B;

const personal : AB = {
  name: "Alice",
  age: 30,
};

// 주의
// 교차 타입은 겹치는 속성이 있을 경우 공통적인 타입으로 좁혀짐
// 호환되지 않는 타입을 결합하면 오류가 발생

// 에러 경우
// type C = { value: string };
// type D = { value: number };

// // 오류 발생: string과 number는 교차 불가
// type CD = C & D;

console.log(MV);
// 교차 믹스인
// 교차 타입을 활용해 여러 객체 또는 클래스의 기능을 결합하는 방식

// 1. 객체 교차 믹스인
// 여러 객체를 하나로 병합하는 방식, Object.assign을 활용

type Flyable = { fly: () => void };
type Swimmable = { swim: () => void };

const flyMixin: Flyable = {
  fly: () => console.log("Flying!"),
};

const swimMixin: Swimmable = {
  swim: () => console.log("Swimming!"),
};

// 교차 타입 생성
const flyingFish: Flyable & Swimmable = Object.assign({}, flyMixin, swimMixin);

flyingFish.fly(); // Flying!
flyingFish.swim(); // Swimming!

// 2. 클래스 교차 믹스인
// implements와 교차 타입을 활용하여 여러 동작을 클래스에 포함

type Walkable = {
  walk: () => void;
};

type Runnable = {
  run: () => void;
};

class animal implements Walkable, Runnable {
  walk() {
    console.log("Walking!");
  }

  run() {
    console.log("Running!");
  }
}

const dog = new animal();
dog.walk(); // Walking!
dog.run(); // Running!

// 2-1. 믹스인 함수를 사용한 클래스 병합
type CanEat = {
  eat: () => void;
};

type CanSleep = {
  sleep: () => void;
};

function Eater<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    eat() {
      console.log("Eating!");
    }
  };
}

function Sleeper<TBase extends new (...args: any[]) => {}>(Base: TBase) {
  return class extends Base {
    sleep() {
      console.log("Sleeping!");
    }
  };
}

class Personal {}

const MixedPerson = Sleeper(Eater(Personal));

const human = new MixedPerson();
human.eat(); // Eating!
human.sleep(); // Sleeping!
