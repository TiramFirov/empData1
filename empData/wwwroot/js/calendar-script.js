let date = new Date();

let options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};

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

	for (let x = firstDayIndex ; x > 0; x--) {
		days += `<div class="prev-date border">${prevLastDay - x + 1}</div>`
	}

	for (let i = 1; i <= lastDay; i++) {
		if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
			days += `<div class="today border">${i}</div>`;
		} else {
			days += `<div class="border">${i}</div>`;
		}
		
	}

	for (let j  = 1; j <= nextDays + 1; j++) {
		days += `<div class="next-days border">${j}</div>`;
		monthDays.innerHTML = days;
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