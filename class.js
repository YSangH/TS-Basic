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
