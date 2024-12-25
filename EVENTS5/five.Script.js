// ACCESSING THE BUTTON:

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }





// EVENT  ONMOUSEOVER:


// let div = document.querySelector("div")
// div.onmouseover = () => {
//     console.log("you are inside div");
// };


// EVENT OBJECT:


// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };



// EVENT LISTENERS:


// let btn2 = document.querySelector("#btn2");

// btn2.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });

// btn2.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });
// let div = document.querySelector("div");



// REMOVE EVENT:

// btn2.addEventListener("click", () => {
//     console.log("button1 was clicked - handler1");
// });

// btn2.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// };

// btn2.addEventListener("click", handler3);

// btn2.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });

// btn2.removeEventListener("click",handler3);



//CHANGING OF MODE DARK INTO LIGHT MODE:


let modeBtn = document.querySelector("#mode");
let currMode = "light";//dark

modeBtn.addEventListener("click",() => {
    if (currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";

     } else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
     }
      console.log(currMode);
    })
