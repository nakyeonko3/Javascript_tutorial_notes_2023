// 다양한 타입의 값(문자, 숫자, 불린, 배열, 다른 오브젝트)을
// 가지고 있는 오브젝트 생성하기

/* 
    자동차 판매점에서 관리하는 고객정보
        고객명
        나이
        전화번호
        보유차량 - 제조사, 모델명, 연식, 가격
*/
const customer = {
  name: "홍길동",
  age: 50,
  phoneNumber: "010-2323-2323",
  carInfo: {
    company: "현대자동차",
    model: "제네시스",
    year: 2023,
    price: 87000000,
  },
};

console.log("고객명:", customer.name);
console.log("나이:", customer.age);
console.log("연락처:", customer.phoneNumber);
console.log("보유차량 제조사: ", customer.carInfo.company);
console.log("보유차량 모델명: ", customer.carInfo.model);
console.log("보유차량 연식: ", customer.carInfo.year);
console.log("보유차량 가격: ", customer.carInfo.price);
