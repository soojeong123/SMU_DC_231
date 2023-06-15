let observerOption = {
  root: null,
  rootMargin: "0px 0px -200px 0px",
  threshold: 0.5,
  //현재 기본값 상태
};
//observerCallback이 조건에 부합할 때 실행시킬 함수인데... 이것이

// let observerCallback = (아무이름1, 아무이름2) => {
//   아무이름1.forEach((각각의개체) => {
//     if (각각의개체.isIntersecting) {
//       console.log("observerCallback", 각각의개체.target);
//       각각의개체.target.classList.add("triggered");
//     } else {
//       각각의개체.target.classList.remove("triggered");
//     }
//   });
// };

let observerCallback = (observingTargets) => {
  observingTargets.forEach((eachObservingTarget) => {
    if (eachObservingTarget.isIntersecting) {
      eachObservingTarget.target.classList.add("triggered"); //교차하면 추가하고
    } else {
      eachObservingTarget.target.classList.remove("triggered"); //교차하지 않으면 때버린다~
    }
  });
};

let observer = new IntersectionObserver(observerCallback, observerOption);
//이것을 observer 함수에 넣음(현재 observer 함수는 elems의 요소들을
//하나씩 불러오고 있고, elems는 document의 animTrigger 클래스임)

//-->observer 함수가 실행되면, intersectionObserver(조건에 부합할 때 실행시킬 함수, 옵션)가 실행됨.
//--->결국! animTrigger가 observerCallback, observerOption의 속성?대로 진행을 하게 됨?

let elems = document.querySelectorAll(".animTrigger");

console.log(elems);
// observer.observe(html요소); 를 넣어야 하는데, selectorAll이라 여러개를 넣음, 그래서 터짐
// observer.observe(html요소); 하나를 넣어야 함 , 해결하기 위해서는~~

elems.forEach((eachElem) => {
  //elems의 요소를 하나씩 불러와서
  observer.observe(eachElem); //observer 함수에 하나씩 넣음
});
