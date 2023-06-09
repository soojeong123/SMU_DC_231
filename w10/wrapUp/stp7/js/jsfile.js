let aBox = document.getElementById("box1");
// aBox.onclick = function () {
//   aBox.classList.toggle("box--clicked");
// };
// function () {} 는 () => {} 랑 같음
aBox.onclick = () => {
  aBox.classList.toggle("box--clicked");
};
