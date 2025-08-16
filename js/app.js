const monthYearEl = document.getElementById('month-year');
const daysContainer = document.getElementById('calendar-days');
const dayNamesContainer = document.querySelector('.calendar__day-names');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');


const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const dayNames = [
    'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'
];

let currentDate = new Date();

const rendarDayNames = () => {
    dayNamesContainer.innerHTML = dayNames.map(day => `<span>${day}</span>`).join('');
}

const rendarCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    monthYearEl.textContent = `${monthNames[month]} ${year}`;

    const firstDay = (new Date(year,month).getDay() + 6) % 7;
    const daysInMonth = 32 - new Date(year,month,32).getDate();

    daysContainer.innerHTML = '';

    for (let i = 0; i < firstDay; i++) {
        daysContainer.innerHTML += `<span class="calendar__days-hidden"></span>`
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        daysContainer.innerHTML += `<span class="${isToday ? 'today' : ''}">${day}</span>`;
    }
}

const changeMonth = (delta) => {
    currentDate.setMonth(currentDate.getMonth() + delta)
    rendarCalendar();
}

prevBtn.addEventListener('click', () => changeMonth(-1));
nextBtn.addEventListener('click', () => changeMonth(1));

rendarDayNames();
rendarCalendar();