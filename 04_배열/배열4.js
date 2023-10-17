// 반복문을 사용해서 배열에 저장된 값 처리하기
let korScores = [80, 70, 60, 40, 100, 200, 300, 30, 70, 100, 80, 90];

// console.log(korScores[0]);
// console.log(korScores[1]);
// console.log(korScores[2]);
// console.log(korScores[3]);
// console.log(korScores[4]);
// console.log(korScores[5]);
// console.log(korScores[6]);
// console.log(korScores[7]);
// console.log(korScores[8]);
// console.log(korScores[9]);

// 배열에 저장된 모든 값을 출력하기 위해서 0번쨰 ~ 9번쟤까지 출력해야한다.
// 반복의 횟수는 총 10회, 시작값은 0, 끝 값은 배열의 길이(10) 보다 작은 값이다.
// for (let index = 0; index < korScores.length; index++) {
//   console.log(korScores[index]);
// }

// 국어점수의 합계를 구하기

let KorTotal = 0;
korScores.forEach((element) => {
  KorTotal += element;
});
console.log("총점" + KorTotal);

// 국어점수의 합계를 구하기
let total = 0;
for (let index = 0; index < korScores.length; index++) {
  total += korScores[index];
}
console.log("총점: ", total);
