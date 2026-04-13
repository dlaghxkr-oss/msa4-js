// 타이머 함수
// 비동기적으로 코드를 실행 

// setTimeout(cb, ms[, ...args]): number
// 설정한 일정 시간 후에 콜백함수를 실행하는 메소드 
// 콜백 함수의 파라미터가 필요한 경우 ...args를 추가 
// 리턴값은 timeoutID 0이 아닌 정수값 (해당 타이머의 고유한 식별값)
const timeoutId1 = setTimeout(() => {
    console.log('1초');
}, 1000);
const timeoutId2 = setTimeout(() => {
    console.log('2초');
}, 1000);
const timeoutId3 = setTimeout(() => {
    console.log('3초');
}, 1000);

console.log(timeoutId1);

//clearTimeout(timeoutID);
// clearTimeout(timeoutId1);

// setInterval(cb, ms[, ...args]): number
// 설정한 일정 시간마다 콜백함수를 실행 
// 반환값은 intervalID로 0이아닌 정수값 (해당 인터벌의 고유한 식별값)
const interValId1 = setInterval(() => {
  console.log('인터벌');
}, 1000);

setTimeout(() => {
  clearInterval(interValId1);
}, 5000);