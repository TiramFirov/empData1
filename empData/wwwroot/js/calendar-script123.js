//Логика календаря

let date = new Date();

let lastDayForScreen = 0;

let options = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	weekday: 'long',
};

let dayWithAbsenteeismOnNormalScreen = document.getElementsByClassName('type-signs-with-FIO');
let dayWithAbsenteeismOnSmallScreen = document.getElementsByClassName('type-signs-without-FIO');

const renderCalendar = () => {
	const monthDays = document.querySelector('.days');

	const firstDayIndex = new Date(date.getFullYear(), date.getMonth(), 0).getDay();

	const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

	const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

	const nextDays = 7 - lastDayIndex - 1;

	const months = [
		"Январь",
		"Февраль",
		"Март",
		"Апрель",
		"Май",
		"Июнь",
		"Июль",
		"Август",
		"Сентябрь",
		"Октябрь",
		"Ноябрь",
		"Декабрь"
	];

	document.querySelector('.date h4').innerHTML = months[date.getMonth()];
	document.querySelector('.date p').innerHTML = date.toLocaleString("ru", options);

	let days = "";

	for (let x = firstDayIndex; x > 0; x--) {
		days += `<div class="prev-date border"><span class="day-num">${prevLastDay - x + 1}</span></div>`
	}

	for (let i = 1; i <= lastDay; i++) {
		if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
			days += `<div data-toggle="modal" data-target="#modal-window" class="today border"><span class="day-num">${i}</span><div class="type-signs-with-FIO"><span class="type-sign badge badge-warning badge-pill">Перкокуев В.М</span><span class="type-sign badge badge-warning badge-pill">Перкокуев В.М</span></div><div class="type-signs-without-FIO d-none"><span class="type-sign badge badge-warning badge-pill">4</span></div></div></div>`;
		} else if (i < date.getDate()) {
			days += `<div data-toggle="modal" data-target="#modal-window" class="border"><span class="day-num">${i}</span><div class="type-signs-with-FIO"><span class="type-sign badge badge-warning badge-pill">Перкокуев В.М</span><span class="type-sign badge badge-warning badge-pill">Перкокуев В.М</span></div><div class="type-signs-without-FIO d-none"><span class="type-sign badge badge-warning badge-pill">5</span></div></div>`;
		} else {
			days += `<div class="border"><span class="day-num">${i}</span><div class="type-signs-with-FIO"><span class="type-sign badge badge-warning badge-pill">Перкокуев В.М</span><span class="type-sign badge badge-warning badge-pill">Перкокуев В.М</span></div><div class="type-signs-without-FIO d-none"><span class="type-sign badge badge-warning badge-pill">9</span></div></div></div>`;
		}

	}

	for (let j = 1; j <= nextDays + 1; j++) {
		if (lastDayIndex != 0) {
			days += `<div class="next-days border"><span class="day-num">${j}</span></div>`;
		}
		monthDays.innerHTML = days;
	}

	lastDayForScreen = lastDay;


	if ($(window).width() < 800) {
		for (let i = 0; i < lastDayForScreen; i++) {
			dayWithAbsenteeismOnNormalScreen[i].classList.add('d-none');
			dayWithAbsenteeismOnSmallScreen[i].classList.remove('d-none');
		}
	}

}



document.querySelector('.prev').addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});

renderCalendar();



$(window).resize(() => {
	if ($(window).width() < 800) {
		for (let i = 0; i < lastDayForScreen; i++) {
			dayWithAbsenteeismOnNormalScreen[i].classList.add('d-none');
			dayWithAbsenteeismOnSmallScreen[i].classList.remove('d-none');
		}

	} else {
		for (let i = 0; i < lastDayForScreen; i++) {
			dayWithAbsenteeismOnNormalScreen[i].classList.remove('d-none');
			dayWithAbsenteeismOnSmallScreen[i].classList.add('d-none');
		}
	}
});