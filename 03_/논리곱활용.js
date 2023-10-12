// 논리곱의 활용
// 자동차 무상수리 기준은 보유기간이 3년 미만이고 주행거리가 5만km이하다.
let year = 3;
let distance = 50000;

// 구매년도, 실제 운행거리
let orderYear = 2016;
let driveDisance = 34000;

let isFree = 2023 - orderYear < year && driveDisance <= distance;
console.log("무상수리 여부:", isFree);

// 논리합의 활용
// 백화점 커피쿠폰 제공은 신규고객은 구매금액과 상관없이 지급하고, 기존 고객은
// 10만원 이상 구매한 경우에만 제공한다.

let price = 1000000;
let customerType = "New";

let myCustomerType = "Gold";
let myorderPrice = 0;

let coffeeCupon = myCustomerType == customerType || myorderPrice >= price;
console.log("커피쿠폰 제공여부:", coffeeCupon);
