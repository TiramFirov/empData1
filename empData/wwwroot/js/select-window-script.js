//Логика окон

let list_emp = document.getElementById('list-emp');
let add_emp = document.getElementById('add-emp');
let calendar_button = document.getElementById('calendar-button');

let list_of_emp = document.getElementById('list-of-emp');
let add_new_emp = document.getElementById('add-new-emp');
let calendar_window = document.getElementById('calendar-window');

add_emp.addEventListener('click', changeSelectedTabOnAdd);
list_emp.addEventListener('click', changeSelectedTabOnList);
calendar_button.addEventListener('click', changeSelectedTabOnCal);
document.body.addEventListener('load', changeSelectedTabOnList);

function changeSelectedTabOnAdd() {
	if (!add_emp.classList.contains("active")) {
		//Изменение состояния кнопок
			//Сделать кнопку активной
			add_emp.classList.add("active");
			//Убрать активность с других кнопок
			list_emp.classList.remove("active");
			calendar_button.classList.remove("active");
			//Сделать другие кнопки прозрачными
			list_emp.classList.remove("btn-dark");
			list_emp.classList.add("btn-outline-dark");
			calendar_button.classList.remove("btn-dark");
			calendar_button.classList.add("btn-outline-dark");

		//Изменение видимости окон
		add_new_emp.classList.remove("d-none");
		calendar_window.classList.add("d-none");
		list_of_emp.classList.add("d-none");
	}
}

function changeSelectedTabOnList(){
	if (!list_emp.classList.contains("active")) {
		//Изменение состояния кнопок
			//Сделать кнопку активной
			list_emp.classList.add("active");
			//Убрать активность с других кнопок
			add_emp.classList.remove("active");
			calendar_button.classList.remove("active");
			//Сделать другие кнопки прозрачными
			add_emp.classList.remove("btn-dark");
			add_emp.classList.add("btn-outline-dark");
			calendar_button.classList.remove("btn-dark");
			calendar_button.classList.add("btn-outline-dark");
	

		//Изменение видимости окон
		list_of_emp.classList.remove("d-none");
		calendar_window.classList.add("d-none");
		add_new_emp.classList.add("d-none");
	}
}

function changeSelectedTabOnCal(){
	if (!calendar_button.classList.contains("active")) {
		//Изменение состояния кнопок
			//Сделать кнопку активной
			calendar_button.classList.add("active");
			//Убрать активность с других кнопок
			add_emp.classList.remove("active");
			list_emp.classList.remove("active");
			//Сделать другие кнопки прозрачными
			add_emp.classList.remove("btn-dark");
			add_emp.classList.add("btn-outline-dark");
			list_emp.classList.remove("btn-dark");
			list_emp.classList.add("btn-outline-dark");

		//Изменение видимости окон
		calendar_window.classList.remove("d-none");
		list_of_emp.classList.add("d-none");
		add_new_emp.classList.add("d-none");
	}
}






