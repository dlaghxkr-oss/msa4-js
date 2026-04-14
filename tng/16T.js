// -------------------------------
// 함수 모음
// -------------------------------
const randomposition = () => {
  const container = document.querySelector('.container ');
  
  const randomX =Math.floor(Math.random() * (window.innerWidth - container .offsetWidth));
  const randomY =Math.floor(Math.random() * (window.innerHeight - container .offsetHeight));

 container .style.top = `${randomY}px`;
  container .style.left = `${randomX}px`;
  };
  


  const setRandomBackgroundColor = (element) => {
  const randomrgbRed = Math.random() * 255;
  const randomrgbGreen = Math.random() * 255;
  const randomrgbBlue = Math.random() * 255;

  element.style.backgroundColor = `rgb(${randomrgbRed}, ${randomrgbGreen}, ${randomrgbBlue })`;
  }


const dokidoki = () => {
  alert('두근두근');
};



const hide = () => {
  const box = document.querySelector('.box');
  
    alert('숨는다'); 
    // 숨는다 클릭 이벤트 제거
    box.classList.remove('busted'); 
    randomposition(); // 랜덤 위치 설정

    // 들켰다 이벤트 추가
    box.removeEventListener('click',hide);
    //  6. 
    box.addEventListener('click', busted);

    box.style='';

    const container = document.querySelector('.container');
    container .addEventListener('mouseenter',dokidoki);


};

const busted = () =>  {
  const container = document.querySelector('.container');
  const box = document.querySelector('.box');
  
  box.classList.add('busted'); 

  container.removeEventListener('mouseenter', dokidoki );

  // 들켰다 클릭 이벤트 추가
  box.addEventListener('click', hide);

  // 들켰다 클릭 이벤트 제거
  box.removeEventListener('click',busted);

  // 보너스: 랜덤 배경색 지정
  setRandomBackgroundColor(box);

    alert('들켰다.');
};


// -------------------------------
// 로직 모음
// -------------------------------

const box = document.querySelector('.box');
(() => {
randomposition ();
const btnInfo = document.querySelector('button');
btnInfo.addEventListener('click', () => {
  alert('안녕하세용.\n숨어있는 div를 찾아주세용.');
});

const container = document.querySelector('.container');
container.addEventListener('mouseenter',dokidoki);
box.addEventListener('click',busted);
})();


// box.addEventListener('click', () => {})
 



  