// let box = document.querySelector("#box2");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

// let box = document.querySelector(".box");
// box.onclick = () => {
//   box.classList.toggle("boxSelected");
// };

let boxes = document.querySelectorAll(".box"); //변수이름짓기
console.log(boxes);
console.log(boxes[0]);
console.log(boxes[1]);
console.log(boxes[2]);
// boxes.forEach(function (grass) {
//   grass.onclick = () => {
//     grass.classList.toggle("boxSelected");
//   };
// });

//each에 boxes안의 값들을 넣음
boxes.forEach((each) => {
  each.onclick = () => {
    each.classList.toggle("boxSelected");
  };
});
