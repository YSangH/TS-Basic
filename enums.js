var NumbericEnums = "-- 숫자 열거형 --";
var StringEnums = "-- 문자 열거형 --";
var HeterogeneousEnum = "-- 이종 열거형 --";
var CACM = "-- 계산된 멤버와 상수 멤버 --";
var UnionEnums = "-- 유니온 열거형 --";
var EnumMemberTypes = "-- 열거형 멤버 타입 --";
var Runtime = "-- 런타임 열거형 --";
var Compile = "-- 컴파일 열거형 --";
var Reverse = "-- 역방향 매핑 --";
var Const = "-- 상수형 열거 --";
var Ambient = "-- Ambient 열거형 --";
// 열거형
// 이름이 있는 상수들의 집합을 정의
// 변수 앞에 enum을 붙혀준다.
console.log(NumbericEnums);
// 기본 숫자 열거형
// 숫자로 이루어진 집합 정의
// 초기 미 설정 시 시작은 0
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
console.log(Direction.Up); // 0
console.log(Direction.Right); // 3
// 초기값 지정
var Status;
(function (Status) {
    Status[Status["Start"] = 1] = "Start";
    Status[Status["Process"] = 2] = "Process";
    Status[Status["End"] = 3] = "End"; // 3
})(Status || (Status = {}));
console.log(Status.Process); // 2
console.log(Status[1]); // "Start"
console.log(StringEnums);
// 문자 열거형
// 문자로 이루어진 집합의 정의
var Command;
(function (Command) {
    Command["Up"] = "UP";
    Command["Down"] = "DOWN";
    Command["Left"] = "LEFT";
    Command["Right"] = "RIGHT";
})(Command || (Command = {}));
console.log(Command.Up); // "UP"
console.log(Command.Right); // "RIGHT"
console.log(HeterogeneousEnum);
// 이종 열거형
// 숫자와 문자열을 혼합해서 사용하는 열거형
var Mixed;
(function (Mixed) {
    Mixed[Mixed["No"] = 0] = "No";
    Mixed["Yes"] = "YES";
})(Mixed || (Mixed = {}));
console.log(Mixed.No); // 0
console.log(Mixed.Yes); // "YES"
console.log(CACM);
// 계산된 멤버와 상수 멤버
// 상수 멤버
// 컴파일 타임에 값이 결정되는 멤버로, 단순하고 빠르다
// 초기화된 값: 숫자, 문자열, 다른 상수 열거형 참조.
// 암시적 초기화: 숫자 열거형에서 값 생략 시 자동 증가.
(function (Status) {
    Status[Status["start"] = 0] = "start";
    Status[Status["Progress"] = 1] = "Progress";
    Status[Status["end"] = 1] = "end"; // 다른 상수 참조
})(Status || (Status = {}));
console.log(Status.start); // 0
console.log(Status.end); // 1
// 계산된 멤버
// 런타임에 값이 계산되는 멤버
// 복잡한 표현식을 사용할 수 있지만,
// 다른 멤버의 값에는 영향을 주지 못함
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 3] = "Write";
    FileAccess[FileAccess["Complex"] = "FileAccess".length] = "Complex"; // 문자열 연산 결과 (11)
})(FileAccess || (FileAccess = {}));
console.log(FileAccess.Write); // 3
console.log(FileAccess.Complex); // 11
console.log(UnionEnums);
// 유니온 열거형
// 열거형 멤버들의 값을 리터럴 타입으로 사용하여 유니온 타입을 정의
// 열거형의 값이 상수 열거형이어야 함
var TrafficMode;
(function (TrafficMode) {
    TrafficMode["Car"] = "CAR";
    TrafficMode["Bike"] = "BIKE";
    TrafficMode["Bus"] = "BUS";
})(TrafficMode || (TrafficMode = {}));
function getTransportInfo(transport) {
    switch (transport.mode) {
        case TrafficMode.Car:
            return "Car is moving at ".concat(transport.speed, " km/h with ").concat(transport.fuel, "% fuel.");
        case TrafficMode.Bike:
            return "Bike is moving at ".concat(transport.speed, " km/h. Helmet worn: ").concat(transport.helmet);
        case TrafficMode.Bus:
            return "Bus is moving at ".concat(transport.speed, " km/h with a capacity of ").concat(transport.capacity, " people.");
        default:
            return "Unknown transport mode.";
    }
}
// Example usage
var carInfo = getTransportInfo({ mode: TrafficMode.Car, speed: 120, fuel: 80 });
console.log(carInfo); // "Car is moving at 120 km/h with 80% fuel."
console.log(EnumMemberTypes);
// 열거형 멤버타입
// 특정 열거형의 멤버들만을 허용하는 타입을 의미
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "PENDING";
    OrderStatus["Shipped"] = "SHIPPED";
    OrderStatus["Delivered"] = "DELIVERED";
    OrderStatus["Canceled"] = "CANCELED";
})(OrderStatus || (OrderStatus = {}));
// 함수 정의
function updateOrderStatus(status) {
    if (status === OrderStatus.Pending) {
        console.log("Order is still pending.");
    }
    else if (status === OrderStatus.Shipped) {
        console.log("Order has been shipped.");
    }
}
// 사용 예시
updateOrderStatus(OrderStatus.Pending); // Valid
updateOrderStatus(OrderStatus.Shipped); // Valid
// updateOrderStatus(OrderStatus.Delivered); // Error: 'OrderStatus.Delivered' is not assignable
console.log(Runtime);
// 런타임 열거형
// 런타임에 존재하는 실제 객체
var Alphabet;
(function (Alphabet) {
    Alphabet[Alphabet["X"] = 0] = "X";
    Alphabet[Alphabet["Y"] = 1] = "Y";
    Alphabet[Alphabet["Z"] = 2] = "Z";
})(Alphabet || (Alphabet = {}));
function f(obj) {
    return obj.X;
}
f(Alphabet);
// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드
console.log(f(Alphabet));
console.log(Compile);
var nowStatus = 1 /* State.Active */;
console.log(nowStatus); // 컴파일 시 1로 대체
//컴파일 결과(JS코드)
// const nowStatus = 1;
// console.log(nowStatus);
console.log(Reverse);
// 역방향 매핑
// 숫자형 열거에서 지원하는 기능
// 열거형의 키→값 혹은 값→키 접근 가능
// 문자형은 역방향 매핑이 불가능하다.
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
console.log(Colors.Red); // 0 (키로 값 접근)
console.log(Colors[1]); // "Green" (값으로 키 접근)
console.log(Colors[2]); // "Blue"
console.log(Const);
var today = 1 /* Days.Monday */;
console.log(today); // 컴파일 시 1로 대체
console.log(Ambient);
// 외부 구현체가 제공된다고 가정
const HttpStatus = {
  OK: 200,
  NotFound: 404,
  InternalServerError: 500,
};
console.log(HttpStatus.OK); // 출력: 200 (외부 구현체로 동작)
