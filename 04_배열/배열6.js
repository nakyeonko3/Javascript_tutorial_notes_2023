// 배열에 값이 존재하는지 확인하기
let names = ["김유신", "이순신", "강감찬", "류관순", 234324];

// 이름을 입력받아서, 배열에 이름이 존재하는지 확인하기
// 존재하는지 체크할 갑슨 "강잠찬"이라고 가정한다.

let value = "강감찬";
let exist = false;

/* 
    1. 존재여부를 저장하는 변수 exist를 생성하고 초기값으로 false를 입력한다.
    2. 반복시작
        - 배열의 0번째부터 값을 조회해서 변수를 name에 대입한다.
        - name의 값과 value의 값이 일치하면 exist에 true를 대입한다.
    3. 반복 종료
    4. exist의 값을 출력한다.
*/

for (let index = 0; index < names.length; index++) {
  const name = names[index];
  if (name == value) {
    exist = true;
    break; // 일치하는 값을 발견하면 더이상 배열의 값을 조사할 필요가 없다.
  }
}
console.log("존재여부: ", exist);

let result = names.find((value) => value === "김유신");
console.log(result);

const inventory = ["apples", "bananas", "cherries"];

function isCherries(fruit) {
  return fruit === "cherries";
}

console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
