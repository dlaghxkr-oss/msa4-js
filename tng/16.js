const btntak = document.querySelector('#btntak');
btntak.addEventListener('click',() => { 
  alert('안녕하세요')
})
btntak.addEventListener('click',() => { 
  alert('숨어있는 div를 찾아주세요.')
})


let isHidden = true;

const hiddenBox = document.querySelector('#hiddenBox');
hiddenBox.addEventListener('mouseenter', () => { 
  if (isHidden) {
    alert ('두근두근');
  }
}); console.log(hiddenBox)

hiddenBox.addEventListener('click', () => { 
  if (isHidden) {
    alert ('들켰다');
    isHidden = false;
    hiddenBox.style.opacity = '1';
  } else {
    alert ('숨는다');
    isHidden = true;
    hiddenBox.style.opacity = '0';
  }
    
  }); console.log(hiddenBox)



