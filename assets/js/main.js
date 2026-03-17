document.addEventListener("DOMContentLoaded", () => {
	const newsSlider = new Swiper(".news__slider", {
		slidesPerView: 3,
		slidesPerGroup: 1,
		loop: false,
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

	const eventSlider = new Swiper(".event__calendar-slider", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: false,
		speed: 1200,
		pagination: false,
		navigation: {
			nextEl: '.event__calendar .slider__next',
			prevEl: '.event__calendar .slider__prev',
		},
		freeMode: false,
		autoplay: false,
		spaceBetween: 74,
		breakpoints: {
		   0: {
			   freeMode: {
					enabled: true,       // Включает режим свободного скролла
					sticky: false,       // Отключает прилипание к слайдам
					momentum: true,      // Добавляет инерцию после отпускания
					momentumVelocityRatio: 1, // Скорость инерции
				},
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
		if (menu.classList.contains('active') && !menu.contains(event.target) && !burgerButton.contains(event.target)) {
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

	// PopUps

	const popupButtonOpen = document.querySelectorAll('a[data-modal]');
	const popupWindow = document.querySelector('.popup');
	if(popupWindow) {
		const popupButtonClose = document.querySelector('.popup .close');
		const overlay = document.querySelector('.overlay');
		const body = document.querySelector('body');

		function showPopup() {
			popupWindow.classList.add('show');
			overlay.classList.add('active');
			body.classList.add('fixed');
		}
		
		function removePopup() {
			popupWindow.classList.remove('show');
			overlay.classList.remove('active');
			body.classList.remove('fixed');
		}

		popupButtonOpen.forEach(item => {
			item.addEventListener('click', function(event) {
				event.preventDefault();
				showPopup();
			});

		});

		popupButtonClose.addEventListener('click', function(event) {
			event.preventDefault();
			removePopup();
		});

		document.addEventListener('click', (event) => {
			if (!popupWindow.contains(event.target) && !popupButtonOpen.contains(event.target)) {
				removePopup();
			}
		});
	}

	// Скрываем элементы с индексами 4 и выше

	const button = document.getElementById('loadMore');

	if(button) {
		const limit = 4;
		const items = document.querySelectorAll('.useful__item');

		items.forEach((item, index) => {
			if (index >= limit) {
			item.classList.add('hidden');
			}
		});

		button.addEventListener('click', () => {
			items.forEach(item => {
			item.classList.remove('hidden'); // Показываем все
			});
			button.style.display = 'none'; // Скрываем кнопку
		});
	}

	// Логика спойлер-списка

	const liHasChildren = document.querySelectorAll('.has-children span');
	liHasChildren.forEach((item, index) => {
		item.addEventListener('click', () => {
			item.parentElement.classList.toggle('active');
		});
	});
});

document.addEventListener( 'DOMContentLoaded', function () {
var main = new Splide( '#main-slider', {
    type      : 'fade',
    rewind    : true,
    pagination: false,
    arrows    : false,
  } );

  var thumbnails = new Splide( '#thumbnail-slider', {
    fixedWidth  : 190,
    fixedHeight : 127,
    gap         : 20,
    pagination  : false,
    cover       : true,
    isNavigation: true,
	type: 'loop', 
	direction: "ttb",
	heightRatio: 0.67,
	perPage: 5,
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );

$( function() {
	$( ".datepicker" ).datepicker({
		dateFormat: 'dd.mm.yy',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		firstDay: 1 // Понедельник
	});
} );

$( document ).ready(function() {
	$('.news__filter .open__filter').on('click', function() {
		$('.filter-list').toggleClass('active');
		$('.news__filter .reset__filter').toggleClass('active');
		if($(this).children('span').html() == 'Расширенный поиск') {
			$(this).children('span').html('Скрыть фильтр');
		} else {
			$(this).children('span').html('Расширенный поиск');
		}
	})

	$('.filter-list__item input').on('click', function() {
		if ($('#period').is(':checked')) {
            $('.filter-list__calendar').addClass('active');
        } else {
			$('.filter-list__calendar').removeClass('active');
		}
	});

	$('.reset__filter').on('click', function() {
		$('.filter-list input[type="radio"]').prop('checked', false);
		$('.filter-list__calendar').removeClass('active');
	});
});