$(document).ready(function() {
	const $cont = $('.cont');
	const $slider = $('.slider');
	const $nav = $('.nav');
	const winW = $(window).width();
	const animSpd = 750; // Change also in CSS
	const distOfLetGo = winW * 0.2;
	let curSlide = 1;
	let animation = false;
	let autoScrollVar = true;
	let diff = 0;
	
	// Generating slides
	let arrItems = [
		'Бухгалтерские услуги <br>в Санкт-Петербурге', 
		'Бухгалтерские услуги <br>в Санкт-Петербурге', 
		'Бухгалтерские услуги <br>в Санкт-Петербурге', 
		'Бухгалтерские услуги <br>в Санкт-Петербурге'
		]; // Change number of slides in CSS also
	let arrButtons = [
		{
			'class': 'button blue',
			'text': 'Наша презентация'
		},
		{
			'class': 'button grey',
			'text': 'Наша презентация'
		},
		{
			'class': 'button blue',
			'text': 'Наша презентация'
		},
		{
			'class': 'button grey',
			'text': 'Наша презентация'
		}
	]
	let numOfCities = arrItems.length;
	let arrCitiesDivided = [];

	arrItems.map((city) => {
		let length = city.length;
		let letters = Math.floor(length / 4);
		let exp = new RegExp(".{1," + letters + "}", "g");
		
		//arrCitiesDivided.push(city.match(exp));
		arrCitiesDivided.push([city]);
	});
	
	let generateSlide = function(city) {
		let frag1 = $(document.createDocumentFragment());
		let frag2 = $(document.createDocumentFragment());
		//const numSlide = arrItems.indexOf(arrItems[city]) + 1;
		const numSlide = city + 1;
		const firstLetter = arrCitiesDivided[city][0].charAt(0);

		const $slide =
					$(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
							<div class="slide__darkbg slide--${numSlide}__darkbg"></div>
							<div class="slide__text-wrapper slide--${numSlide}__text-wrapper"><div class="slide__text-wrapper-2"></div></div>
						</div>`);

		const letter = 
					$(`<div class="slide__letter slide--${numSlide}__letter">
							${firstLetter}
						</div>`);

		for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
			const text = 
						$(`<div class="slide__text slide__text--${i + 1}">
								${arrCitiesDivided[city][i]}
							</div>`);
			frag1.append(text);
		}
		const btn = $(`<a href="#" class="${arrButtons[city].class}">${arrButtons[city].text}</a>`);

		const navSlide = $(`<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`);
		frag2.append(navSlide);
		$nav.append(frag2);

		//$slide.find(`.slide--${numSlide}__text-wrapper`).append(letter).append(frag1);
		$slide.find(`.slide--${numSlide}__text-wrapper`).children('.slide__text-wrapper-2').append(frag1).append(btn);
		$slider.append($slide);

		if (arrItems[city].length <= 4) {
			//$('.slide--'+ numSlide).find('.slide__text').css("font-size", "12vw");
		}
	};

	for (let i = 0, length = numOfCities; i < length; i++) {
		generateSlide(i);
	}

	$('.nav__slide--1').addClass('nav-active');

	// Navigation
	function bullets(dir) {
		$('.nav__slide--' + curSlide).removeClass('nav-active');
		$('.nav__slide--' + dir).addClass('nav-active');
	}
	
	function timeout() {
		animation = false;
	}
	
	function pagination(direction) {
		animation = true;
		diff = 0;
		$slider.addClass('animation');
		$slider.css({
			'transform': 'translate3d(-' + ((curSlide - direction) * 100) + '%, 0, 0)'
		});
		
		$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - direction) * 50) + '%, 0, 0)'
		});
		
		$slider.find('.slide__letter').css({
				'transform': 'translate3d(0, 0, 0)',
		});
		
		$slider.find('.slide__text').css({
			'transform': 'translate3d(0, 0, 0)'
		});
	}
	
	function navigateRight() {
		if (!autoScrollVar) return;
		if (curSlide >= numOfCities) return;
		pagination(0);
		setTimeout(timeout, animSpd);
		bullets(curSlide + 1);
		curSlide++;
	}
	
	function navigateLeft() {
		if (curSlide <= 1) return;
		pagination(2);
		setTimeout(timeout, animSpd);
		bullets(curSlide - 1);
		curSlide--;
	}

	function toDefault() {
		pagination(1);
		setTimeout(timeout, animSpd);
	}
	
	// Events
	$(document).on('mousedown touchstart', '.slide', function(e) {
		if (animation) return;
		let target = +$(this).attr('data-target');
		let startX = e.pageX || e.originalEvent.touches[0].pageX;
		$slider.removeClass('animation');
		
		$(document).on('mousemove touchmove', function(e) {
			let x = e.pageX || e.originalEvent.touches[0].pageX;
			diff = startX - x;
			if (target === 1 && diff < 0 || target === numOfCities && diff > 0) return;
			
			$slider.css({
				'transform': 'translate3d(-' + ((curSlide - 1) * 100 + (diff / 30)) + '%, 0, 0)'
			});
			
			$slider.find('.slide__darkbg').css({
				'transform': 'translate3d(' + ((curSlide - 1) * 50 + (diff / 60)) + '%, 0, 0)'
			});
			
			$slider.find('.slide__letter').css({
				'transform': 'translate3d(' +  (diff / 60) + 'vw, 0, 0)',
			});
			
			$slider.find('.slide__text').css({
				'transform': 'translate3d(' + (diff / 15) + 'px, 0, 0)'
			});
		})	
	})
	
	$(document).on('mouseup touchend', function(e) { //
		$(document).off('mousemove touchmove');
		
		if (animation) return;
		
		if (diff >= distOfLetGo) {
			navigateRight();
		} else if (diff <= -distOfLetGo) {
			navigateLeft();
		} else {
			toDefault();
		}
	});
	
	$(document).on('click', '.nav__slide:not(.nav-active)', function() {
		let target = +$(this).attr('data-target');
		bullets(target);
		curSlide = target;
		pagination(1);
	});	
	
	$(document).on('click', '.side-nav', function() {
		let target = $(this).attr('data-target');
		
		if (target === 'right') navigateRight();
		if (target === 'left') navigateLeft();
	});
	
	$(document).on('keydown', function(e) {
		if (e.which === 39) navigateRight();
		if (e.which === 37) navigateLeft();
	});
	
	/*$(document).on('mousewheel DOMMouseScroll', function(e) {
		if (animation) return;
    let delta = e.originalEvent.wheelDelta;
		
    if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
	 	if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
    });*/
});

function validateInput(form, inputClass, className = 'error') {
	let validate = () => {
		if(form.getElementsByClassName(inputClass)[0].value.length==0) {
			form.getElementsByClassName(inputClass)[0].parentElement.classList.add(className);
			return false;
		} else {
			form.getElementsByClassName(inputClass)[0].parentElement.classList.remove(className);
			return true;
		}
	}
	form.getElementsByClassName(inputClass)[0].addEventListener('input', (e) => {
		validate();
	});
	
	return validate();
}

const form = document.getElementsByClassName('contacts-form');
if(form.length > 0) {
	const formEl = form[0].getElementsByTagName('form')[0];
	formEl.addEventListener('submit', (e) => {
		e.preventDefault();
		e.stopImmediatePropagation();
		
		let supportPageOffset = window.pageXOffset !== undefined;
		let isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
		let y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
		
		let res_1 = validateInput(formEl, 'input-name');
		let res_2 = validateInput(formEl, 'input-surname');
		let res_3 = validateInput(formEl, 'textarea-message', 'error-2');
		
		if(res_1 && res_2 && res_3) {
			document.getElementsByClassName('popups')[0].style.display = 'block';
			document.getElementsByClassName('popups')[0].style.top = y+'px';
			document.getElementsByClassName('popup')[0].style.transform = 'translateY(-'+document.getElementsByClassName('popup')[0].offsetHeight/2+'px)';
		}
		
	});
}
const closeButton = document.getElementsByClassName('close-button');
if(closeButton.length > 0) {
	closeButton[0].addEventListener('click', (e) => {
		e.preventDefault();
		closeButton[0].parentElement.parentElement.style.display = 'none';
	});
}