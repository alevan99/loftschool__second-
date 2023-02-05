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
// REVIEWS
/////////////////////////////////////////////



// const interactiveLink = document.querySelector(".interactive-avatar");

// interactiveLink.addEventListener("click", (e) => {
// 	e.preventDefault();
// })

const findBlockByAlias = alias => {
	return $(".reviews__item").filter((ndx, item) => {
		return $(item).attr("data-linked-with") == alias
	});
};

$(".interactive-avatar__link").click((e) => {
	e.preventDefault();

	const $this = $(e.currentTarget);
	const target = $this.attr("data-open");
	const itemToShow = findBlockByAlias(target);
	const curItem = $this .closest(".reviews__switcher-item");

	itemToShow.addClass("active").siblings().removeClass("active");
	curItem.addClass("active").siblings().removeClass("active");

});


