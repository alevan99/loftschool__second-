;(function() {
	const lines = document.querySelectorAll(".colors-acco__item");

	for (let index = 0; index < lines.length; index++) {
		const element = lines[index]
		element.addEventListener("click", e => {
			e.preventDefault();
			if (e.target.classList.contains("colors-acco__content")) return
			const currentLine = e.target.closest(".colors-acco__item");
	
			for (let i = 0; i < lines.length; i++) {
				if (lines[i] !== currentLine)
				lines[i].classList.remove("colors-acco__item-active")
			}
	
			if (currentLine.classList.contains("colors-acco__item-active")) {
				currentLine.classList.remove("colors-acco__item-active")
			} else {
				currentLine.classList.add("colors-acco__item-active");
			}
		})
	}
})()