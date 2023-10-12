let num1 = 5;
num1++; // 변수에 저장된 값을 1증가시킨다.
++num1; // 변수에 저장된 값을 1증가시킨다.

console.log(num1);

let num2 = 5;
let a = ++num2; // num1의 값이 1이 증가하고 a에는 6이 대입된다.
console.log("a의 값", a); //6
console.log("num2의 값", num2); //6

let num3 = 5;
let b = num3++; // num3가 대입이 되고, num3의 값이 1이 증가된다.
console.log("b의 값", b); // 5가 출력된다.
console.log("num3의 값", num3); // 6이 출력된다.

let num4 = 5;
num4++;
let c = num4;
console.log("c의 값", c);
console.log("num4의 값", num4);

let num5 = 5;
++num5;
let d = num5;
console.log("d의 값", d);
console.log("num5의 값", num5);

// // 산술 연산자.
// let num1 = 10;
// let num2 = 20;

// // 덧셈 연산자
// // 대입 연산자가 가장 우선순위가 낮다
// let result = num1 + num2;

// // 숫자 + 숫자 -> 덧셈 연산자로 동작
// let result1 = num1 + num2;
// console.log("결과1", result1);

// // 문자 + 문자 -> 문자열 연결하기로 동작
// // 문자 + 숫자 -> 문자열 연결하기로 동작
// // 숫자 + 문자 -> 문자열 연결하기로 동작
// // 하나라도 문자가 있으면 이어 붙이기로 동작함

// console.log("a" + "b");
// console.log("a" + 122);
// console.log(123 + "a");
// console.log(2 + 2 + "a");
// console.log(2 + 2 + "a" + 2 + 2);

// // 뺄셈, 곱셈, 나눗셈, 나머지 연산자는
// // 좌항이나 우항에 숫자가 아닌 값이 있어도

// // 해당 연산을 실행한다.
// // 해당 연산을 실행하기 전에 숫자가 아닌 값은
// // 숫자로 변환한다.

// console.log("1" + 2);
// console.log("1" - 2);
// console.log("100" / 2);
// console.log("7" % 4);

// // 숫자로 변환할 수 없는 값으로 연산하면
// // 연산의 결과는 항상 NaN이다.
// // NaN은 Not a Number를 나타내는 예약어다.
// console.log("가나다라" - 10);
