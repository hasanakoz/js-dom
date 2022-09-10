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
