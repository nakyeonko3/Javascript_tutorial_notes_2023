let num1 = 0.1;
let num2 = 0.2;

// 실수값에 대한 산술 연산의 결과는
// 실제로 변수에 저장된 값과 차이가 발생할 수 있다
// 프로그램에서 실수를 저장할 때,
// 그 실수 값에 근사값으로 저장하기 때문이다.

let num3 = (num1 * 10 + num2 * 10) / 10;
console.log(num3);

// 실수 값이 포함되어 있을 때는
// 소수점부를 없을 수 있을 만큼의 10의 배수를
// 곱하고, 계산결과를 다시 10의 배수로 나눈다.
