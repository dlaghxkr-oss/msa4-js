const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert("버튼 클릭됨");
})

const colorBtn = document.querySelector('#colorBtn');
colorBtn.addEventListener('click', () => {
  document.body.style.backgroundColor = 'lightblue'
  alert("짜잔");
});

const text = document.querySelector('#text');
text.addEventListener('click', () => {
  if (text.style.opacity === 0) {
    text.style.opacity ='1';
    
  }
})