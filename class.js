var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Class = "---- 클래스 ----";
var Inheritance = "---- 상속 ----";
var AccessController = "---- 접근제어자 ----";
var ReadonlyModifier = "---- 읽기전용 지정자 ----";
var ParameterProperties = "---- 매개변수 프로퍼티 ----";
var Accessors = "---- 접근자 ----";
var StaticProperties = "---- 전역 프로퍼티 ----";
var Abstract = "---- 추상 메서드 ----";
var ConstructorFunctions = "---- 생성자 함수 ----";
console.log(Class);
var Architecture = /** @class */ (function () {
    function Architecture(name, year) {
        this.name = name;
        this.year = year;
    }
    Architecture.prototype.profile = function () {
        return " \uAC74\uBB3C\uBA85 : ".concat(this.name, ", \uAC74\uBB3C\uB144\uC218 : ").concat(this.year, " ");
    };
    return Architecture;
}());
// 클래스 사용
var architecture = new Architecture("63빌딩", 39);
console.log(architecture.profile()); // Hello, my name is Alice and I am 30 years old.
console.log(Inheritance);
// 상속
var Gun = /** @class */ (function () {
    function Gun(name) {
        this.name = name;
    }
    Gun.prototype.reload = function () {
        console.log("".concat(this.name, "\uC774 \uC7A5\uC804 \uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
    };
    return Gun;
}());
var gun = /** @class */ (function (_super) {
    __extends(gun, _super);
    function gun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    gun.prototype.fire = function () {
        console.log("".concat(this.name, "\uC774 \uBC1C\uC0AC \uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
    };
    return gun;
}(Gun));
// 사용 예시
var pistol = new gun("glock");
pistol.reload(); // glock이 장전 되었습니다.
pistol.fire(); // glock이 발사 되었습니다.
console.log(AccessController);
// 접근제어자
// public (기본값)
// 어디서나 접근 가능.
// 명시적으로 선언하지 않으면 모든 멤버는 기본적으로 public으로 설정됩니다.
var PublicExample = /** @class */ (function () {
    function PublicExample(name) {
        this.name = name;
    }
    return PublicExample;
}());
var PublicEx = new PublicExample("John");
console.log(PublicEx.name); // 접근 가능
// 2. private
// 클래스 내부에서만 접근 가능.
// 클래스 외부나 상속받은 클래스에서도 접근 불가.
var PrivateExample = /** @class */ (function () {
    function PrivateExample(secret) {
        this.secret = secret;
    }
    PrivateExample.prototype.getSecret = function () {
        return this.secret; // 내부에서 접근 가능
    };
    return PrivateExample;
}());
var PrivateEx = new PrivateExample("hidden");
console.log(PrivateEx.getSecret()); // 접근 가능
// console.log(ex.secret); // 오류: private 속성
// 3. protected
// 클래스 내부와 상속받은 클래스에서 접근 가능.
// 클래스 외부에서는 접근 불가.
var Parent = /** @class */ (function () {
    function Parent(value) {
        this.value = value;
    }
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.getValue = function () {
        return this.value; // 상속받은 클래스에서 접근 가능
    };
    return Child;
}(Parent));
var child = new Child(42);
console.log(child.getValue()); // 접근 가능
// console.log(child.value); // 오류: protected 속성
console.log(ReadonlyModifier);
// 읽기전용 지정자
// 인터페이스에서 다뤘던 readonly로 프로퍼티를 읽기 전용으로 만들고
// 읽기 전용 프로퍼티는 선언 또는 생성자에서 초기화 
// 사용법:
// 1. 속성 선언 시 사용:
var ReadExample = /** @class */ (function () {
    function ReadExample(name) {
        this.name = name; // 초기화 가능
    }
    return ReadExample;
}());
var ReadEx = new ReadExample("Bread");
console.log(ReadEx.name); // "John"
// ex.name = "Doe"; // 오류: 읽기 전용 속성은 변경 불가
// 읽기 전용 배열:
// readonly를 배열에 적용해 배열의 변경(추가, 삭제 등)을 막는다.
var NumberArray = [1, 2, 3];
// numbers.push(4); // 오류: 읽기 전용 배열은 변경 불가
console.log(NumberArray); // [ 1, 2, 3]
console.log(NumberArray[1]); // 2
console.log(ParameterProperties);
// 매개변수 프로퍼티
// 생성자의 매개변수에 접근 제어자(public, private, protected, readonly)를 추가해
// 클래스의 프로퍼티를 자동으로 선언 및 초기화하는 기능
var Food = /** @class */ (function () {
    function Food(name, kcal) {
        this.name = name;
        this.kcal = kcal;
    }
    return Food;
}());
console.log(Accessors);
// 접근자
// 객체의 멤버에 대한 접근을 가로채는 방식으로 getters/setters를 지원
var Hero = /** @class */ (function () {
    function Hero(name) {
        this._name = name;
    }
    Object.defineProperty(Hero.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newName) {
            if (newName.length > 0) {
                this._name = newName;
            }
            else {
                throw new Error('Name cannot be empty');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Hero;
}());
var hero = new Hero('Iron Man');
console.log(hero.name); // Iron Man
hero.name = 'Spider Man'; // Setter 호출
console.log(hero.name); // Spider Man
console.log(StaticProperties);
// 전역 프로퍼티
// 특정 스코프에 속하지 않고 어디서든 접근 가능한 변수를 의미
var MyStaticClass = /** @class */ (function () {
    function MyStaticClass() {
    }
    MyStaticClass.staticMethod = function () {
        console.log("Static Property: ".concat(this.staticProperty));
    };
    MyStaticClass.staticProperty = "I am static!";
    return MyStaticClass;
}());
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
var character = /** @class */ (function () {
    function character() {
    }
    character.prototype.move = function () {
        console.log("Moving...");
    };
    return character;
}());
var Archor = /** @class */ (function (_super) {
    __extends(Archor, _super);
    function Archor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archor.prototype.action = function () {
        console.log("attack!");
    };
    return Archor;
}(character));
var archor = new Archor();
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
var Stone = /** @class */ (function () {
    function Stone(name, hardness) {
        this.name = name; // 인스턴스 변수 초기화
        this.hardness = hardness;
    }
    Stone.prototype.StoneInfo = function () {
        console.log("stone : ".concat(this.name, " , hardness : ").concat(this.hardness, "."));
    };
    return Stone;
}());
var myStone = new Stone("Garnet", "7.0"); // 생성자 호출
myStone.StoneInfo(); // This car is a Toyota from 2022.
