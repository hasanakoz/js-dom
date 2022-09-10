//?********************************************************
//***************getElementById************************** */
//************************************************** */

const h1 = document.getElementById("header");
console.log(h1);
h1.style.color = "white";
h1.style.backgroundColor = "red";

//_______________________
const myInput = document.getElementById("input");
const button = document.getElementById("btn");
button.style.backgroundColor = "black";
button.style.color = "white";
button.style.width = "7rem";
button.style.borderRadius = "10px";
button.style.padding = "1rem";
myInput.style.padding = "1rem";
button.style.fontSize = "1.1rem";

//?********************************************************
//***************getElementByTagName************************** */
//************************************************** */

const list = document.getElementsByTagName("li");
console.log(list); //HTML Collection
list[2].style.color = "red";
const element3 = list.item(3);
element3.style.color = "blue";
element3.textContent = "React/ Vue/ Angular";
list[4].innerText = "Django/Flask";

console.log(list[1].textContent); //display none olanları gösterir
console.log(list[1].innerText); //display none olanları göstermez

list[4].innerHTML = "<a href='https://www.clarusway.com'>Clarusway </a> ";

//?********************************************************
//***************getElementByClassName************************** */
//************************************************** */

const myList = document.getElementsByClassName("list");
console.log(myList);
console.log(myList[0].innerText);

const myListArray = Array.from(myList); //HTML Collectionı Array'e çevirdik.
// myList.forEach((item) => console.log(item.innerText)); // html collection klasik array olmadığı için dizi metodu çalışmıyhor.

myListArray.forEach((item) => console.log(item.innerText));

//spread metodu ile HTML Collection'ı iterate etmek
[...myList].forEach((item) => console.log(item.innerText));
[...myList].forEach((item) => (item.style.color = "red"));

//?********************************************************
//***************querySelector()************************** */
//************************************************** */
const myLi = document.querySelector("li"); //ilk elementi
console.log(myLi);
console.log(myLi.innerText);
myLi.style.color = "yellow";

const itemList = document.querySelector(".item-list");
itemList.style.backgroundColor = "gray";

const input = document.querySelector("#input");
console.log(input.value); //input değeri innerText ile değil value ile alınır.

document.querySelector("#btn").style.cursor = "pointer";

const itemH2 = document.querySelector(".item-list h2");
itemH2.style.color = "purple";

const myBtn = document.querySelector("input[type ='button']");
console.log(myBtn);

//?********************************************************
//***************querySelectorAll()************************** */
//************************************************** */

const lists = document.querySelectorAll("ul li");
console.log(lists); //NodeList getirir.

lists.forEach((li) => console.log(li.innerText)); //NodeList ile forEach metodu kullanılabildi.

console.log(
  document.querySelectorAll("section ul li:nth-child(4)")[0].innerText
);

//?********************************************************
//***************TRAVERSING DOM************************** */
//************************************************** */

//parentNode
const listim = document.querySelector(".list");
const ul = listim.parentNode;
console.log(ul);
ul.style.border = "2px solid red";

console.log(listim.parentElement); //parentNode ile benzer

//________________________

const itemListSection = listim.closest("section");
itemListSection.style.background = "lightgray";

//________________________________
//children
const addItem = document.querySelector(".add-item");
console.log(addItem.children);
const h2 = addItem.children[0];
h2.style.color = "pink";

console.log(addItem.parentNode.parentNode.children[0]); //header

console.log(ul.firstElementChild.innerText); //HTML
console.log(ul.lastElementChild.innerText); //Clarusway

//_______________________
//nextElementSibling, previousElementSibling

const myListim = ul.children;
console.log(myListim);
const javascript = myList[2];

const css = javascript.previousElementSibling;
console.log(css);

const react = javascript.nextElementSibling;
console.log(react.textContent);

console.log(javascript.previousElementSibling.previousElementSibling.innerText);

//?********************************************************
//***************CREATING NODE************************** */
//************************************************** */

const newP = document.createElement("p");
newP.id = "new-par";
newP.setAttribute("class", "new-class");
const text = document.createTextNode("This is new p element");
newP.appendChild(text);
console.log(newP);

const h2N = document.querySelector(".item-list h2");
h2N.after(newP);

//_________________________
//getattribute()
console.log(newP.getAttribute("class")); //new-class

//___________________
//classList

console.log(newP.classList.contains("par")); //true
newP.classList.add("new-class");
console.log(newP);
newP.classList.remove("new-class");
