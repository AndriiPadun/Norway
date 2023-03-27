`use strict`
// Burger
const burger = document.querySelector('.header__button');
const menu = document.querySelector('.header__menu');




const norway = document.querySelector('.norway');
const paginationItemOne = document.querySelector('.pagination__item_1');
const paginationItemTwo = document.querySelector('.pagination__item_2');
const paginationItemThree = document.querySelector('.pagination__item_3');
const paginationItems = document.querySelectorAll(`.pagination__item`)
const locationItems = document.querySelectorAll('.locations__item');
const locationItemOne = document.querySelector('.locations__item_1');
const locationItemTwo = document.querySelector('.locations__item_2');
const locationItemThree = document.querySelector('.locations__item_3');
document.addEventListener("click", function (e) {
	const targetElem = e.target;
	if(targetElem.closest (`.header__button`) ){
		menu.classList.toggle('active-menu');
		document.body.classList.add(`lock`);
	}
	if(!targetElem.closest(`.header__nav`)){
		menu.classList.remove('active-menu');
		document.body.classList.remove(`lock`);
	}
	if( targetElem.closest(`.popup`)){
		menu.classList.toggle('active-menu');
	}
	if(targetElem.closest(`.pagination__item_1`) || targetElem.closest(`.locations__item_1`) ){
		norway.classList.remove(`slide-2`);
		norway.classList.remove(`slide-1`);

		paginationItems.forEach(function(paginationItem){
			paginationItem.classList.remove(`active-item`)
		});
		paginationItemOne.classList.add(`active-item`);

		locationItems.forEach(function(locationItem){
			locationItem.classList.remove(`locations__active`)
		});
		locationItemOne.classList.add(`locations__active`);
	}
	if(targetElem.closest(`.pagination__item_2`) || targetElem.closest(`.locations__item_2`)){
		norway.classList.add(`slide-1`);
		norway.classList.remove(`slide-2`);
		paginationItems.forEach(function(paginationItem){
			paginationItem.classList.remove(`active-item`)
		});
		paginationItemTwo.classList.add(`active-item`);

		locationItems.forEach(function(locationItem){
			locationItem.classList.remove(`locations__active`)
		});
		locationItemTwo.classList.add(`locations__active`);
		
	}
	if(targetElem.closest(`.pagination__item_3`) || targetElem.closest(`.locations__item_3`)){
		norway.classList.add(`slide-2`);
		norway.classList.remove(`slide-1`);

		paginationItems.forEach(function(paginationItem){
			paginationItem.classList.remove(`active-item`)
		});
		paginationItemThree.classList.add(`active-item`);

		locationItems.forEach(function(locationItem){
			locationItem.classList.remove(`locations__active`)
		});
		locationItemThree.classList.add(`locations__active`);
	}
	
})

new Swiper(`.activities__slider`,{
	slidesPerView: 4,
	spaceBetween: 25,
	navigation: {
		nextEl:`.swiper-button-next`,
		prevEl:`.swiper-button-prev`
	},
	rewind:true,
	pagination:{
		el: `.swiper-pagination`,
		clickable: true, 
		dynamicBullets:true
	},
	breakpoints:{
		320: {
			slidesPerView: 1,
			spaceBetween: 15
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 16
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1450: {
			slidesPerView: 4,
			spaceBetween: 25
		},
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	  },
})



const secondSlider = new Swiper(`.beauties__container-slider`,{
	slidesPerView: 3,
	spaceBetween: 36,
	navigation: {
		nextEl:`.to-right`,
		prevEl:`.to-left`
	},
	rewind:true,

	breakpoints:{
		320: {
			slidesPerView: 1,
			spaceBetween: 15
		},
		530: {
			slidesPerView: 2,
			spaceBetween: 15
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1099: {
			slidesPerView: 3,
			spaceBetween: 36
		},
		
		// 1450: {
		// 	slidesPerView: 4,
		// 	spaceBetween: 25
		// },
	},
	keyboard: {
		enabled: true,
		onlyInViewport: true,
	  },
})


const searchInput = document.querySelector(`.search-beauties__input`);
const searchButton = document.querySelector(`.search-beauties__button`);
const allPlaces = document.querySelectorAll(`div[data-name]`);
const arrowOne = document.querySelector(`.to-left`);
const arrowTwo = document.querySelector(`.to-right`);
const alert = document.querySelector(`.alert`)


searchButton.addEventListener("click", function(){
	let allTogether = [];
	allPlaces.forEach(place => {
		
		if(place.dataset.name !== searchInput.value.toLowerCase()){
		place.classList.add(`remove`)			
		// alert.classList.add(`active-alert`);	
		}
		// alert.classList.remove(`active-alert`);
		
		if(place.dataset.name == searchInput.value.toLowerCase()){
			place.classList.remove(`remove`);
			allTogether.push(place)
		}
		
	});
	
	if(allTogether.length == 0){
		alert.classList.add(`active-alert`);	
	}else{
		alert.classList.remove(`active-alert`);
	}
	
} );

searchInput.addEventListener("keyup", function(event){
	
	if(event.key === "Enter"){
		let allTogether = [];
	allPlaces.forEach(place => {
		
		if(place.dataset.name !== searchInput.value.toLowerCase()){
		place.classList.add(`remove`);	
		}
	
		if(place.dataset.name == searchInput.value.toLowerCase()){
			place.classList.remove(`remove`);
			allTogether.push(place);
		}
		
	});
	
	if(allTogether.length == 0){
		alert.classList.add(`active-alert`);	
	}else{
		alert.classList.remove(`active-alert`);
	}
	
	}
});

searchInput.addEventListener("blur", function(){
	if(searchInput.value == ""){
		allPlaces.forEach(place => {
			if(place.classList.contains(`remove`)){
				place.classList.remove(`remove`);
			}
		});
		secondSlider.enable();
		arrowOne.style.display  = `block`;
		arrowTwo.style.display  = `block`;

	}
});

const feedbackItems = document.querySelectorAll(`.item-feedback`);
const feedbackButton = document.querySelector(`.feedback__button`);

feedbackButton.addEventListener("click", function(){
	feedbackItems.forEach((item, index) => {
		if(index > 2 && item.hasAttribute(`hidden`, true)){
			setTimeout(() => {
				item.removeAttribute(`hidden`, true);
			}, 500);
			item.classList.add(`showfeedback`);
			item.classList.remove(`removefeedback`);
			feedbackButton.textContent = `Show less feedbacks`;
			
			console.log(item);
		} else if(index > 2) {
			setTimeout(() => {
				item.setAttribute(`hidden`, true);
			}, 500);
		item.classList.remove(`.showfeedback`);
		item.classList.add(`removefeedback`);
		feedbackButton.textContent = `Show more feedbacks`;
		}
	}) 
})

// ПЛАВНИЙ СКРОЛ
// Функція, яка викликається при кліку на посилання з якорем
function scrollToAnchor(event) {
	event.preventDefault(); // Зупиняємо дію звичайного посилання
  
	const speed = 1.5; // Швидкість прокрутки (в секундах на піксель)
	const anchorId = event.currentTarget.getAttribute("href"); // Отримуємо id якоря
  
	// Шукаємо елемент з потрібним якорем і отримуємо його координати
	const targetElement = document.querySelector(anchorId);
	const targetPosition = targetElement.offsetTop;
  
	// Отримуємо поточну позицію документа
	const startPosition = window.pageYOffset;
	const distance = targetPosition - startPosition;
  
	let startTime = null;
  
	// Анімаційна функція прокрутки
	function scrollTo(timestamp) {
	  if (!startTime) startTime = timestamp;
	  const progress = timestamp - startTime;
	  const step = Math.min(progress / (speed * 1000), 1); // Визначаємо крок анімації (не більше 1)
	  window.scrollTo(0, startPosition + distance * step); // Прокручуємо до нової позиції
	  if (progress < speed * 1000) requestAnimationFrame(scrollTo); // Продовжуємо анімацію, якщо не дійшли до кінця
	}
	if (!event.currentTarget.classList.contains('popup-link')) { // Перевіряємо чи містить елемент клас "popup-link"
		requestAnimationFrame(scrollTo); // Запускаємо анімацію прокрутки, якщо елемент не має класу "popup-link"
	  }
  }
  
  // Знаходимо всі посилання з якорями і призначаємо їм обробник події click
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => link.addEventListener('click', scrollToAnchor));

//   ПОПАП
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
			
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) { 
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');
	
	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
		if(menu.classList.contains('active-menu')){
			document.body.classList.add(`lock`);
		}
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.code == "Escape") {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});



  