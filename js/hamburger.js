const openElement = document.querySelector(".hamburger");
const closeElement = document.querySelector(".cross__logo");
const body = document.body;

openElement.addEventListener("click", e => {
	e.preventDefault();

	var humburgerMenu = document.querySelector("#humburgerMenu")
	humburgerMenu.classList.remove(".hamburger-menu")
	
	var hamburgerMain = document.querySelector(".hamburger-menu");
	hamburgerMain.classList.toggle("hamburger-main");
});

closeElement.addEventListener("click", e => {
	e.preventDefault();

	var hamburgerMain = document.querySelector(".hamburger-menu");
	hamburgerMain.classList.remove("hamburger-main");
});


humburgerMenu.addEventListener("click", e => {
	if(!e.target.classList.contains("hamburger-menu__link")) {
		closeElement.click();
	}
});


/////////////////////////////////////////////

const interactiveLink = document.querySelector(".interactive-avatar");

interactiveLink.addEventListener("click", (e) => {
	e.preventDefault();
})



// $(".interactive-avatar__link").click(e => {
// 	e.preventDefault();

// })