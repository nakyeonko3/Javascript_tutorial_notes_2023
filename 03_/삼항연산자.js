// 점수가  60점 이상이면 "합격", 그 외에는  "불합격"으로 판정하기

let score = 60;

let result = score >= 60 ? "합격" : "불합격";
console.log("시험결과: ", result);

/*
조건식이 true로 판정되면 수행문이 실행된다.
if(조건식) {
    수행문;
}
*/

// 평균점수가 60점 이상이면 합격이다.
let kor = 80;
let eng = 60;
let math = 65;

let total = kor + eng + math;
let average = total / 3;

if (average >= 60) {
  console.log("합격입니다.");
}

console.log("최종 점수: ", average);
