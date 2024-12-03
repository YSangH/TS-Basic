const NumbericEnums = "-- 숫자 열거형 --";
const StringEnums = "-- 문자 열거형 --";
const HeterogeneousEnum = "-- 문자 열거형 --";
const CACM = "-- 계산된 멤버와 상수 멤버 --";
const UnionEnums = "-- 유니온 열거형 --";
const EnumMemberTypes = "-- 열거형 멤버 타입 --"

// 열거형
// 이름이 있는 상수들의 집합을 정의
// 변수 앞에 enum을 붙혀준다.

console.log(NumbericEnums);

// 기본 숫자 열거형
// 숫자로 이루어진 집합 정의
// 초기 미 설정 시 시작은 0
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

console.log(Direction.Up);    // 0
console.log(Direction.Right); // 3

// 초기값 지정
enum Status {
  Start = 1, // 1이라는 초기값을 설정
  Process, // 2
  End      // 3
}

console.log(Status.Process); // 2
console.log(Status[1]); // "Start"

console.log(StringEnums);
// 문자 열거형
// 문자로 이루어진 집합의 정의

enum Command {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Command.Up);    // "UP"
console.log(Command.Right); // "RIGHT"

console.log(HeterogeneousEnum);
// 이종 열거형
// 숫자와 문자열을 혼합해서 사용하는 열거형
enum Mixed {
  No = 0,            // 숫자 값
  Yes = "YES",       // 문자열 값
}

console.log(Mixed.No);  // 0
console.log(Mixed.Yes); // "YES"

console.log(CACM);
// 계산된 멤버와 상수 멤버

// 상수 멤버
// 컴파일 타임에 값이 결정되는 멤버로, 단순하고 빠르다

// 초기화된 값: 숫자, 문자열, 다른 상수 열거형 참조.
// 암시적 초기화: 숫자 열거형에서 값 생략 시 자동 증가.

enum Status {
  start,          // 0 (암시적 초기화)
  Progress = 1,   // 초기화된 상수
  end = Progress  // 다른 상수 참조
}

console.log(Status.start);    // 0
console.log(Status.end);      // 1

// 계산된 멤버
// 런타임에 값이 계산되는 멤버
// 복잡한 표현식을 사용할 수 있지만,
// 다른 멤버의 값에는 영향을 주지 못함

enum FileAccess {
  Read = 1 << 1,             // 계산된 값 (2)
  Write = Read | 1,          // 계산된 값 (3)
  Complex = "FileAccess".length // 문자열 연산 결과 (11)
}

console.log(FileAccess.Write);   // 3
console.log(FileAccess.Complex); // 11

console.log(UnionEnums);
// 유니온 열거형
// 열거형 멤버들의 값을 리터럴 타입으로 사용하여 유니온 타입을 정의
// 열거형의 값이 상수 열거형이어야 함

enum TrafficMode {
  Car = "CAR",
  Bike = "BIKE",
  Bus = "BUS",
}

type Transport =
  | { mode: TrafficMode.Car; speed: number; fuel: number }
  | { mode: TrafficMode.Bike; speed: number; helmet: boolean }
  | { mode: TrafficMode.Bus; speed: number; capacity: number };

function getTransportInfo(transport: Transport): string {
  switch (transport.mode) {
    case TrafficMode.Car:
      return `Car is moving at ${transport.speed} km/h with ${transport.fuel}% fuel.`;
    case TrafficMode.Bike:
      return `Bike is moving at ${transport.speed} km/h. Helmet worn: ${transport.helmet}`;
    case TrafficMode.Bus:
      return `Bus is moving at ${transport.speed} km/h with a capacity of ${transport.capacity} people.`;
    default:
      return "Unknown transport mode.";
  }
}

// Example usage
const carInfo = getTransportInfo({ mode: TrafficMode.Car, speed: 120, fuel: 80 });
console.log(carInfo); // "Car is moving at 120 km/h with 80% fuel."

console.log(EnumMemberTypes);
// 열거형 멤버타입
// 특정 열거형의 멤버들만을 허용하는 타입을 의미

enum OrderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Canceled = "CANCELED",
}

// 열거형 멤버 타입
type ActiveStatus = OrderStatus.Pending | OrderStatus.Shipped;

// 함수 정의
function updateOrderStatus(status: ActiveStatus): void {
  if (status === OrderStatus.Pending) {
    console.log("Order is still pending.");
  } else if (status === OrderStatus.Shipped) {
    console.log("Order has been shipped.");
  }
}

// 사용 예시
updateOrderStatus(OrderStatus.Pending);  // Valid
updateOrderStatus(OrderStatus.Shipped);  // Valid
// updateOrderStatus(OrderStatus.Delivered); // Error: 'OrderStatus.Delivered' is not assignable













