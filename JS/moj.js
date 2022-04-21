const buttonone = document.querySelector(".buttonone");
const dog = document.querySelector(".dog");
const cat = document.querySelector(".cat");
const enlarge = document.querySelector(".enlarge");
const like = document.querySelector(".like");
const dogYes = document.querySelector(".dogYes");
const dogNo = document.querySelector(".dogNo");
const wait = document.querySelector(".wait");

const buttonTaskOne = () => {
	dog.classList.toggle("cat");
};

const likeTaskOne = () => {
	like.style.margin = "10px";
	like.style.fontSize = "50px";
	like.style.padding = "30px 20px";
};
const notlike = () => {
	like.style.margin = "10px";
	like.style.fontSize = "30px";
	like.style.padding = "30px 20px";
};

const dogTwoTask = () => {
	dogNo.classList.toggle("dogYes");
};

buttonone.addEventListener("click", buttonTaskOne);
enlarge.addEventListener("mouseleave", notlike);
enlarge.addEventListener("mouseenter", likeTaskOne);
wait.addEventListener("click", dogTwoTask);

// Czasy
const waitTwo = () => {
	console.log(`Funkcja będzie wykonywała się co 2 sekundy⌚️`);
};

setInterval(waitTwo, 2000);

const waitThree = () => {
	console.log(`Funkcja po 3 sekundach pojawi się`);
};

setTimeout(waitThree, 3000);

// Strict mode

("use strict");

const numbers = ["one", "two", "three", "four"];

for (const number of numbers) {
	console.log(number);
}

// // Alerty
// alert('Uwaga')

// Confirm
if (confirm("Czy chcesz pizzę z dowozem?🍕")) {
	console.log("ok zamawiam");
} else {
	console.log("Nie to nie");
}

// prompt

const training = prompt("Czy dzisiaj trenujesz", "Tak idę na basen");
console.log(training);

// Math
console.log(Math.random());
console.log(Math.max(10, 20, 14));

// setAttribute, hasAttribute, getAttribute, removeAttribute
const a = document.querySelector("a");

a.setAttribute("class", "przypisanieklasywJS");

console.log(dogYes.hasAttribute("style"));

console.log(dogNo.getAttribute("class"));

a.removeAttribute("class");

const span = document.querySelector("span");

span.setAttribute("class", "testowa");
console.log(`Czy span ma klasę: ${span.hasAttribute("class")}`);
console.log(`Span ma klasę. Jego nazwa klasy to ${span.getAttribute("class")}`);

//Data atrybuty
const data_number = document.querySelector('[data-number="123"]');
console.log(data_number);

console.log(data_number.dataset.number);
console.log(data_number.dataset.infoTekst);

// Relacje
const middleChild = document.querySelector(".middle-child");
const FirstChild = middleChild.previousElementSibling;
const ThirdChild = middleChild.nextElementSibling;
const parents = middleChild.parentElement;
const grandparents = middleChild.closest(".grandparents");

console.log(FirstChild);
console.log(ThirdChild);
console.log(parents);
console.log(grandparents);

// Zadanie 1
const img = document.querySelector("img");
img.setAttribute(
	"src",
	"https://cdn.pixabay.com/photo/2022/04/18/16/20/animal-7140980_960_720.jpg"
);
img.setAttribute("alt", "Dwa koty");
img.style.width = "350px";
img.style.height = "300px";
img.style.backgroundSize = "cover";
img.style.backgroundPosition = "center bottom";
img.style.borderRadius = "5px";
img.style.boxShadow = "5px 5px 10px";

const cats = () => {
	console.log("To są dwa koty🐹🐰");
};

setTimeout(cats, 2000);
