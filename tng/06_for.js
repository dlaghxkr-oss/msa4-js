// 1번 문제
for (let i = 0; i < 5; i++) {
  let star ="";
  for (let z = 0; z < 5; z++) {
    star += "*";
  }
  console.log(star);
}

// 2번 문제
for (let i = 0; i < 5; i++) {
  let star = "";
  for (let z = 0; z <= i; z++) {
    star += "*";
  }
  console.log(star);
}

// 3번 문제

for(let i = 0; i < 5; 1++) {
  let space = '';
  for(let z = 4; z > i; z--) {
    space += ' ';
  }
  console.log(space);

  let star = '';
    for(let y = 0; y <= i; y++){
      star +='*';
  }
  console.log(`${space}${star}`);
}

// let g = "";
// for (let i = 1; i <= 5; i++) {
//   g += "*";
//   console.log(g);
// }

// let g = "";
// for (let ) {

// }
