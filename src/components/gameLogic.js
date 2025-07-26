let score = 0;
let ClickedList = [];
export function shuffle(array) {
  let m = array.length,
    t,
    i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}
export function gameLogic(Card) {
  if (ClickedList.includes(Card)) {
    console.log("lost");
    score = 0;
  } else {
    ClickedList.push(Card);

    score++;
    console.log(score);
  }
}
