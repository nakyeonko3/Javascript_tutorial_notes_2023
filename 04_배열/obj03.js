// 빈 프로젝트를 생성하고, 값을 저장하기
// 정보는 이름과 값의 조합이다.

// 성적 정보를 담을 빈 오브젝트를 생성하고
// 학생이름, 국어, 영어, 수학 점수를 저장하기
let score = {};
console.log("성적객체: ", score);

score.name = "홍길동";
console.log("성적객체: ", score);

score["kor"] = 100;
console.log("성적객체: ", score);

score.eng = 80;
console.log("성적객체: ", score);

score.math = 70;
console.log("성적객체: ", score);

score.total = score.kor + score.eng + score.math;
score.average = score.total / 3;

console.log("학생이름: ", score.name);
console.log("총점: ", score.total);
console.log("평균: ", score.average.toFixed(2));
