// console.log용 영역 구분선
var type = "----------- 타입 ---------";
var array = "----------- 배열 ---------";
var tuple = "----------- 튜플 ---------";
var Enum = "----------- 열거 ---------";
var Any = "---------- Any -----------";
var Void = "---------- Void ----------";
var unknown = "---- null & undefined ----";
var Never = "---------- never ---------";
var OBject = "--------- object ---------";
console.log(type);
// 참&거짓
var isDone = true;
console.log(isDone); // true출력
// 숫자d
var ten = 10;
console.log(ten); // 10 출력
// 문자
var language = "kor";
console.log(language); // kor 출력
console.log(array);
//[] 배열
var list = [12, 46, 24];
console.log(list); // 12, 46, 24 출력
// 제네릭
var apb = ["a", "b", "c"];
console.log(apb); // a, b, c 출력
console.log(tuple);
// 튜플 : 배열내에 각각 타입설정 
var multy;
multy = ["qwer", 1234];
console.log(multy); // correct: qwer, 1234 출력
// multy = [ 4567, "zxcv"]; // error
console.log(multy[0].substring(1)); // correct: substring은 괄호안에 있는 번째부터 문자 출력 따라서 wer 출력
console.log(multy[1]); // correct: 1234 출력
// multy[2] = "asdf";
// console.log(multy[2]); // error : 2번 인덱스가 존재하지 않음
console.log(Enum);
// eunm : 변수에 값 지정
var Animal;
(function (Animal) {
    Animal[Animal["rabbit"] = 0] = "rabbit";
    Animal[Animal["cat"] = 1] = "cat";
    Animal[Animal["fish"] = 2] = "fish";
})(Animal || (Animal = {}));
var c = Animal.rabbit;
console.log(c); // rabbit은 0, cat은 1, fish는 2번의 번호를 지니므로 0 출력
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 5] = "green";
    Color[Color["blue"] = 8] = "blue";
})(Color || (Color = {}));
var C = Color.green;
console.log(C); // greend은 5번으로 설정했으므로 5 출력
var animalSpecies = Animal[1];
console.log(animalSpecies); // Animal 1번 인덱스에 있는 cat 출력 2번 인덱스로 바꾸면 fish로 출력
console.log(Any);
// any : 모든 타입 할당 가능
var thing = 100;
thing = "str?ing";
thing = false;
console.log(thing); // 마지막에 할당된 false 출력
console.log(Void);
// void: ⇔ any : 어떠한 타입도 존재하지 않음
function message() {
    console.log("This is my message");
}
var unusable = undefined;
unusable = null;
console.log(unusable);
console.log(unknown);
// null, undefined : null과 undefined는 오직 any와 각자 자신들 타입에만 할당 가능 (예외적으로 undefined는 void에 할당 가능 )
var n = null;
var u = undefined;
console.log(n, u);
console.log(Never);
function handleAnimal(animal) {
    if (animal === "cat") {
        console.log("It's a cat!");
    }
    else if (animal === "dog") {
        console.log("It's a dog!");
    }
    else {
        var neverValue = animal; // 이 부분은 절대 실행되지 않음
        console.log(neverValue);
    }
}
handleAnimal("cat"); // if문 출력
handleAnimal("dog"); // else if문 출력
console.log(OBject);
// object : number, string, boolean, null, undefined 가 아닌 나머지\
function create(o) {
    console.log(o);
}
create({ prop: 0 });
create(null);
create(51);
create("string");
create(undefined);
create(true);
