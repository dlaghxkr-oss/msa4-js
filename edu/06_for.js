// for 문
// 기본문법
// for(초기값; 조건식; 1회 루프당 증감값) {
//  // 반복하고 싶은 처리
// }

// for (let i = 0; i < 3; i++) {
//   if (i === 1) {
//     //break: 처리중 break를 만나면 그 즉시 루프 종료
//     break;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for (let i = 0; i < 5; i++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for (let i = 0; i < 3; i++) {
//   console.log(`부모: ${i}번째`);

//   for (let z = 0; z < 3; z++) {
//     console.log(`자식: ${z}번째`);
//   }
// }

// 구구단 2단
// let(i=2)

// for(let i = 2; i <= 18; i++) {
//   console.log(`2 X ${i} = ${z}`)
// }

let startDan = 2;
for (startDan; startDan <= 19; startDan++) {
  console.log(`** ${startDan}단 **`);
  for (let i = 1; i <= 19; i++) {
    console.log(`${startDan} X ${i} = ${startDan * j}`);
  }
}

// for (i = 1; i < 11; i + ) {
//   console.log(`${i}`);
// }
