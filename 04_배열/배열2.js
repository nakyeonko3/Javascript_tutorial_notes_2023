// 배열객체를 생성하고, 배열에 값을 저장하기
{
  // 배열을 생성할 때, 배열의 각 요소에 값을 미리 저장하기
  let arr1 = [100, 80, 60, 70, 100];
  let arr2 = ["김유신", "강감찬", "이순신"];

  // 빈 배열을 생성하고, 값을 추가하기

  // 0번째 부터 99번째 까지는 undefined로 되어있다.

  let arr3 = [];
  console.log("arr3이 참조하는 배열 ->", arr3);
  arr3[0] = "서울"; // arr3가 참조하는 배열객체의 0번째 칸에 대입
  console.log("arr3이 참조하는 배열 ->", arr3);

  arr3[1] = "인천"; // arr3가 참조하는 배열객체의 1번째 칸에 대입
  console.log("arr3이 참조하는 배열 ->", arr3);

  arr3[2] = "부산"; // arr3가 참조하는 배열객체의 2번째 칸에 대입
  console.log("arr3이 참조하는 배열 ->", arr3);

  arr3[3] = "서울";
  console.log("arr3이 참조하는 배열 ->", arr3);
}
