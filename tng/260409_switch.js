let num = 1 ;
switch(num) {
  case 1:
    console.log("1입니다")
    break;
    case 2:
      console.log("2입니다")
      break;
      case 3: 
      console.log("3입니다")
      break;
      default:console.log("나머지")
}


let fruit = "grape"; 
switch(fruit) {
  case "apple": 
  console.log("사과")
  break;
  case "banana":  
  console.log("바나나")
  break;
  case "grape": 
  console.log("포도")
  break;
  default:console.log("없는과일")
}

let chicken = "D"

switch(chicken) {
  case "A": 
    console.log("우수")
  break;
  case "B": 
    console.log("좋음")
  break;
  case "C": 
    console.log("보통")
  break;
  default 
    :console.log("노력필요")
}

let menu = "기타음식";

switch(menu) {
  case "pizza":
  case "pasta":
    console.log("이탈리안 음식")
    break;
    case "sushi":
    case "ramen":
      console.log("일본 음식")
      break;
      default: console.log("기타 음식")
}