const baseUrl = 'https://picsum.photos/v2/list';

const box = document.querySelector('.box');
box.textContent

axios.get(baseUrl)
.then(response => {
  console.log(response);

  const box = document.querySelector('.box');
  box.textContent = '';


  const newCardImg = document.createElement('div')
  newCard.style.backgroundImage = `url('${})`


  const newCard = document.createElement('div');
  newCard.classList.add('card');
  newCard.appendChild(newCardImg);
  newCard.appendChild(newAuthor);



})