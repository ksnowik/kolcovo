document.addEventListener("DOMContentLoaded", () => {
	const newsSlider = new Swiper(".news__slider", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		pagination: false,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1,
			loadOnTransitionStart: true
		},
		navigation: {
			nextEl: '.news .slider__next',
			prevEl: '.news .slider__prev',
		},
		pagination: {
			el: '.news .slider__pagination',
			clickable: true,
			type: 'bullets',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		spaceBetween: 31,
		breakpoints: {
		   0: {
			   centeredSlides: true,
			   slidesPerView: 'auto',
			   spaceBetween: 16,
		   },
		   768: {
			   slidesPerView: 3,
			   centeredSlides: false,
			   spaceBetween: 31,
		   },
		}
	});

	const videoSlider = new Swiper(".video__list", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1,
			loadOnTransitionStart: true
		},
		loop: false,
		speed: 1200,
		lazy: false,
		initialSlide: 4,
		preloadImages: false,
		keyboard: true,
		navigation: {
			nextEl: '.video .slider__next',
			prevEl: '.video .slider__prev',
		},
		pagination: {
			el: '.video .slider__pagination',
			clickable: true,
			type: 'bullets',
		},
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		spaceBetween: 30,
		breakpoints: {
		   0: {
			   slidesPerView: 'auto',
			   spaceBetween: 16,
		   },
		   768: {
			   slidesPerView: 3,
			   spaceBetween: 31,
		   },
		}
	});

	const gallerySlider = new Swiper(".gallery__list", {
		slidesPerView: 2,
		slidesPerGroup: 1,
		lazy: {
			loadPrevNext: true,
			loadPrevNextAmount: 1,
			loadOnTransitionStart: true
		},
		loop: false,
		speed: 1200,
		lazy: false,
		initialSlide: 4,
		preloadImages: false,
		keyboard: true,
		navigation: {
			nextEl: '.gallery .slider__next',
			prevEl: '.gallery .slider__prev',
		},
		pagination: {
			el: '.gallery .slider__pagination',
			clickable: true,
			type: 'bullets',
		},
		autoplay: false,
		spaceBetween: 31,
		breakpoints: {
		   0: {
			   slidesPerView: 'auto',
			   spaceBetween: 16,
		   },
		   768: {
			   slidesPerView: 2,
			   spaceBetween: 31
		   },
		}
	});

	/* mobile menu */
	
	const itemHasChildren = document.querySelectorAll('.item-has-children a');
	itemHasChildren.forEach(item => {
		item.addEventListener('click', function(event) {

			const toggleBtn = event.target.closest('.item-has-children');

			console.log('test');
			event.preventDefault();
			toggleBtn.classList.toggle("active");
		});
	});

	/* burger */
	
	const burgerButton = document.getElementById('burger');
		
	const menu = document.querySelector('.mobile__menu');
	const overlay = document.querySelector('.overlay');
	const buttonClose = document.querySelector('.mobile__menu .close');
	const body = document.querySelector('body');

	function addMenu() {
		menu.classList.add('active');
		overlay.classList.add('active');
		body.classList.add('fixed');
	}
	
	function removeMenu() {
		menu.classList.remove('active');
		overlay.classList.remove('active');
		body.classList.remove('fixed');
	}

	burgerButton.addEventListener('click', function(event) {
		event.preventDefault();
		addMenu();
	});

	buttonClose.addEventListener('click', function(event) {
		event.preventDefault();
		removeMenu();
	});

	document.addEventListener('click', (event) => {
		if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
			removeMenu();
		}
	});

	/* search */

	const searchButton = document.querySelectorAll('.search');
	const searchButtonClose = document.querySelector('.search__panel .close');

	searchButton.forEach(search => {
		search.addEventListener('click', function(event) {
			document.querySelector('.search__panel').classList.toggle("active");
		});
	});

	searchButtonClose.addEventListener('click', function(event) {
		document.querySelector('.search__panel').classList.remove("active");
	});
});