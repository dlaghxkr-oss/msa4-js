// axios.get()













(() => {
  let allowFlg = true; // 디바운싱 제어용 플래그
  const baseURL = 'https://picsum.photos/v2/list';
  let page = 1;
  const limit = 3;
  
  const btnNext = document.querySelector('#btnNext');
  btnNext.addEventListener('click', async () => {
    // allowFlg가 true일 경우 해당 처리 시작
    if(allowFlg) {
      // 처리 시작시 false로 변경해서 처리중 다시 실행되지 않도록 막음 
      allowFlg = false;
      

    try {
      const config ={
        params: {
          // 객체의 프로퍼티를 설정할 때, 사용할 변수명과 키명이 일치하면
          // 아래처럼 단축작성 가능 ㄱㄴㄱㄴ
          // limit : limit, page:page
          limit,
          page
        }
      };
  
       const res = await axios.get(baseURL, config);
      // console.log(res);
  
      res.data.forEach(item => {
        const container = document.querySelector('.container');
  
        const newCard = document.createElement('div');
        const newCardImg = document.createElement('div');
        const newCardAuthor = document.createElement('p');
  
        newCardImg.classList.add('card-img');
        newCardImg.style.backgroundImage = `url('${item.download_url}')`
        newCard.appendChild(newCardImg);
  
        newCardAuthor.textContent = `${item.id}:${item.author}`;
        newCard.appendChild(newCardAuthor);
  
        newCard.classList.add('card');
        container.appendChild(newCard);
      });
  
      page++;
    } catch(error) {
      console.error(error);
    } finally {
      allowFlg = true;
    }
  }
  });
  
  const btnReset = document.querySelector('#btnReset');
  btnReset.addEventListener ('click', () => {
    const container = document.querySelector('.container');
    container.textContent = '';
  
    page = 1;
  });
})();