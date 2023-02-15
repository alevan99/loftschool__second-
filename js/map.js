;(function() {
	let myMap;
	const init = () => {
		myMap = new ymaps.Map("yandex-maps", {
			center: [55.751427, 37.617315],
			zoom: 14,
			controls: []
		});
	
		const coords = [
			[55.745136, 37.588946],
			[55.754055, 37.591183],
			[55.742148, 37.565524],
		];
	
		const myCollection = new ymaps.GeoObjectCollection({}, {
			draggable: false,
			iconLayout: 'default#image',
			iconImageHref: "./img/map-marker.png",
			iconImageSize: [30, 42],
			iconImageOffset: [-3, -42]
		});
	
		coords.forEach(coord => {
			myCollection.add(new ymaps.Placemark(coord));
		});
	
		myMap.geoObjects.add(myCollection);
	
	} 
	
	ymaps.ready(init);
	
})()