// 베스트셀러 정보를 표현하는 배열 생성하기
let books = [
  {
    title: "트렌드 코리아 2024",
    author: "김난도",
    price: 18000,
    discountRate: 0.1,
    sellRate: 0,
  },

  {
    title: "퓨처 셀프",
    author: "벤자민 하디",
    price: 19000,
    discountRate: 0.15,
    sellRate: 0,
  },

  {
    title: "세이노의 가르침",
    author: "세이노",
    price: 19001,
    discountRate: 0.1,
    sellRate: 0,
  },
];

// // 배열에 저장된 베스트셀러 정보 출력하기
// for (let index = 0; index < books.length; index++) {
//   console.log(books[index]);
// }

books.forEach((element) => {
  console.log(`책제목: ${element.title} / 가격: ${element.price} `);
});
