// 국어점수 6개를 저장하는 배열이다
// 배열은 연속된 값을 저장하는 자료구조다.
// 배열은 각각의 값마다 고유한 인덱스를 가진다.

let korScores = [100, 90, 60, 60, 60, 20];

let totalScore1 = 0;

totalScore1 += korScores[0];
totalScore1 += korScores[1];
totalScore1 += korScores[2];
totalScore1 += korScores[3];
totalScore1 += korScores[4];
totalScore1 += korScores[5];

console.log(totalScore1);

let totalScore2 =
  korScores[0] +
  korScores[1] +
  korScores[2] +
  korScores[3] +
  korScores[4] +
  korScores[5];

console.log(totalScore2);

let totalScore3 = 0;

// for (let index = 0; index <= 5; index++) {
//   totalScore3 += korScores[index];
// }

korScores.forEach((value) => (totalScore3 += value));

korScores.map;

console.log(totalScore3);
