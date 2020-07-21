function numberArray(a, b) {
  b = [];
  while (a--) b[a] = a + 1;
  return b;
}
function randomizeArray(a, b, c, d) {
  c = a.length;
  while (c)
    (b = (Math.random() * c--) | 0), (d = a[c]), (a[c] = a[b]), (a[b] = d);
}
const cards = numberArray(9);
const cardsContainer = document.querySelector('#cards');
const shuffleBtn = document.querySelector('#shuffle-btn');
const sortBtn = document.querySelector('#sort-btn');
const renderCards = (cardsArr) => {
  cardsContainer.innerHTML = '';
  for (let i = 0; i < cardsArr.length; i++) {
    const node = document.createElement('div');
    node.innerText = cardsArr[i];
    node.className = 'card';
    node.id = `card${cardsArr[i]}`;
    cardsContainer.appendChild(node);
  }
};
renderCards(cards);

shuffleBtn.addEventListener('click', () => {
  randomizeArray(cards);
  renderCards(cards);
});
sortBtn.addEventListener('click', () => {
  renderCards(cards.sort((a, b) => a - b));
});
