const left = document.querySelector("#arrow--prew");
const right = document.querySelector("#arrow--next");
const itemList = document.querySelector("#slider__list")

const loop = (direction, e) => {
	e.preventDefault();

	if (direction == "right" ) {
		itemList.appendChild(itemList.firstElementChild);
	} else {
		itemList.insertBefore(itemList.lastElementChild, slider__list.firstElementChild);
	}
}

right.addEventListener("click", e => {
	loop ("right", e)
})

left.addEventListener("click", e => {
	loop ("left", e)
})



// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const itemList = document.querySelector("#items");

// const loop = (direction, e) => {
// 	e.preventDefault();

// 	if (direction == "right" ) {
// 		itemList.appendChild(itemList.firstElementChild);
// 	} else {
// 		itemList.insertBefore(itemList.lastElementChild, items.firstElementChild);
// 	}
// }

// right.addEventListener("click", e => {
// 	loop ("right", e)
// })

// left.addEventListener("click", e => {
// 	loop ("left", e)
// })