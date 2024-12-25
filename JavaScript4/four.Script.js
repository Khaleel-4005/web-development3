// console.log("hello");
// alert("are you KHALEEL")




// console.dir(document.body);
// console.dir(document.head);

// console.dir(document.body.childNodes[1]);





// DOM MANIPULATION

// Selecting with id

// let heading = document.getElementById("heading");//h1
// console.dir(heading);

// SELECTING WITH CLASS

// let button =document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myClass")
// console.dir(headings);
// console.log(headings);

//SELCTING WITH TAG

// let parahs= document.getElementsByTagName("p")
// console.dir(parahs);





// QUERY SELECTOR

// let firstEl = document.querySelector("p") //1st element , .myClass, #myId 
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p") //all element , .myclass, #myId
// console.dir(allEl);






// DOM Manipulation

// Properties

// * tagName: returns tag for element nodes

// * innerText: returns the text content of the element and all its children

// * innerHTML: returns the plain text or HTML contents in the element

// * textContent: returns textual content even for hidden elements






// Let's Practice

// Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College students" to this text using JS.

// let h2 = document.querySelector("h2")
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from apna college students";





// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

// let divs =document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


// ATTRIBUTES:

// let div = document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let name=div.getAttribute("name");
// console.log(name);


// SET ATTRIBUTES:


// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"))


// STYLE 
// NODE.STYLE

// let div = document.querySelector("div")
// div.style.backgroundColor ="green";
// div.style.fontSize = "26px";
// div.innerText ="hello world!"


// INSERT ELEMENTS : creating a new button in JS and changing the positions button

// let newBtn = document.createElement("button");
// newBtn.innerText ="click here";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.after(newBtn)
  



// creating a new heading in JS without access in html.

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>";

// document.querySelector("body").prepend(newHeading);



// DELETE 
// NODE.REMOVE()

// let para = document.querySelector("p")
// para.remove();





// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag.


// let newBtn = document.createElement("button");
// newBtn.innerText = "click here!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);


// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.


let para = document.querySelector("p");

