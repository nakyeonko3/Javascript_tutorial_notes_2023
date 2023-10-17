// 배열에 저장된 값을 사용하기

/* 
    - 빈 배열객체 생성하기
         let arr = [];
    - 값을 포함하고 있는 배열객체 생성하기
        let arr = ["김유신", "이순신", "강감찬"];
    - 배열객체에 값을 대입하기
        let arr = [];
        arr[0] = 100; // 참조변수[인덱스] = 값
        arr[1] = 80; 
    - 배열객체에 저장된 값을 사용하기
        let arr = [100, 80, 70, 100];
        console.log(arr[0]); // 참조변수[인덱스]

        let total = arr[0] + arr[1] + arr[2] + arr[3];
*/

let scores = [100, 80, 79];
console.log("국어점수: " + scores[0]);
console.log("영어점수: " + scores[1]);
console.log("수학점수: " + scores[2]);

let total = scores[0] + scores[1] + scores[2] + 0.9;
let average = total / scores.length;

console.log("총점: ", total.toFixed(0));
console.log("평균: ", average.toFixed(2));
