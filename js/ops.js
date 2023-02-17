;(function() {
	const sections = $("section");
	const display = $(".main-content");
	const sideMenu = $(".fixed-menu");
	const menuItems = sideMenu.find("fixed-menu__item");
	const mobileDetect = new MobileDetect(window.navigator.userAgent);
	const isMobile = mobileDetect.mobile();
	
	let inScroll = false;
	
	sections.first().addClass("active");
	
	const countSectionPosition = sectionsEq => {
		return sectionsEq * -100;
	}
	
	const resetActiveClassForItem = (item, itemEq, activeClass) => {
		item.eq(itemEq).addClass(activeClass).siblings().removeClass(activeClass);
	}
	
	const performTransition = sectionsEq => {
	
		if (inScroll == false) {
			
			inScroll = true;
			const position = countSectionPosition(sectionsEq);
	
	
	
			display.css({
				transform: `translateY(${position}%)`
			});
	
			resetActiveClassForItem(sections, sectionsEq, "active");
			// sections.eq(sectionsEq).addClass("active").siblings().removeClass("active");	
			setTimeout(() => {
				inScroll = false;
	
				resetActiveClassForItem(menuItems, sectionsEq, "fixed-menu__item--active");
	
				sideMenu.find(".fixed-menu__item").eq(sectionsEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");
	
			}, 1300);
		}
	}
	
	const scrollViewport = direction => {
		const activeSection = sections.filter(".active");
		const nextSection = activeSection.next();
		const prevSection = activeSection.prev();
	
	
		if (direction == "next"  && nextSection.length) {
			performTransition(nextSection.index())
		}
	
		if (direction == "prev"  && prevSection.length) {
			performTransition(prevSection.index())
		}
	}
	
	$(window).on("wheel", e => {
		const deltaY = e.originalEvent.deltaY;
	
		if (deltaY > 0) {
			scrollViewport("next");
		}
	
		if (deltaY < 0) {
			scrollViewport("prev");
		}
	});
	
	$(window).on("keydown", e => {
		
		const tagName = e.target.tagName.toLowerCase();
	
		if (tagName !== "input" && tagName !== "textarea") {
			switch (e.keyCode) {
				case 38:
					scrollViewport("prev");
					break;
		
				case 40:
					scrollViewport("next");
					break;
			}
		}
		
	});

	$(".wrapper").on("touchemove", e => e.preventDefault());
	
	$("[data-scroll-to]").click(e => {
		e.preventDefault();
	
		const $this = $(e.currentTarget);
		const target = $this.attr("data-scroll-to");
		const reqSection = $(`[data-section-id=${target}]`);
	
		performTransition(reqSection.index());
	
		console.log(reqSection.index())
	});


	if(isMobile) {
		$("body").swipe( {
			swipe:function(event, direction,) {
				const scroller = viewportScroller();
				let scrollDirection = "";

				if(direction === "up") scrollDirection = "next"
				if(direction === "down") scrollDirection = "prev"

				scroller[scrollDirection]();
			},
		})
	}
	
})()
