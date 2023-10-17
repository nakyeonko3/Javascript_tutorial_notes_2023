/* 
    1. 최대값을 저장하는 변수 max를 생성하고, 배열의 0번째 값을 저장한다.
    2. 반복시작
        배열에서 index 번째의 값을 조회해서 변수num에 대입한다.
        num > max를 수행해서 true로 판정되면 num의 값을 max에 대입한다.
    3. 반복종료
    4. 최대값 출력
*/

// 배열의 값 탐색하기
// 최대값, 최소값 구하기
let arr = [10, 100, 79, 40, 80, 200, 396, 200, 206, 56, 100];

// 배열의 저장된 값 중에서 최대값을 구하기
let max = arr[0];
for (let index = 1; index < arr.length; index++) {
  let num = arr[index];
  if (num > max) {
    max = num;
  }
}
console.log("배열의 최대값: ", max);

// arr.forEach((elements) => {
//   if (elements > max) {
//     max = elements;
//   }
// });
console.log(`최댓값: ${max}`);

// 배열의 저장된 값 중에서 최소값을 구하기

/* 
1. 최소값을 저장하는 변수 min를 생성하고, 배열의 0번째 값을 저장한다.
2. 반복시작
    배열에서 index번째의 값을 조회해서 변수 tmpNum에 대입한다.
    num < min 를 수행해서 true로 판정되면 tmpNum의 값을 tmpNum에 대입한다.
3. 반복종료
4. 최솟값 출력
*/

let min = arr[0];

arr.forEach((element) => {
  if (min > element) {
    min = element;
  }
});
console.log(`arr 배열의 최솟값은: ${min}`);

console.log(Math.min(...arr));
