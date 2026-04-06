let grade = "32";
let chicken;

if ((grade > 100 && grade < 0) || typeof grade !== "number") {
  console.log("입력값 오류");
} else {
  if (grade === 100) {
    chicken = "A+";
  } else if (grade >= 90 && grade < 100) {
    chicken = "A";
  } else if (grade >= 80 && grade < 90) {
    chicken = "B";
  } else if (grade >= 70 && grade < 80) {
    chicken = "C";
  } else if (grade >= 60 && grade < 70) {
    chicken = "D";
  } else if (grade < 60) {
    chicken = "F";
  }
  console.log(`당신의 점수는 ${grade}점 입니다.<${chicken}>`);
}

if (grade < 0 || grade > 100) console.log("시험에 해당되는 점수가 아닙니다.");
