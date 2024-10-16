const cardData = [
    {
        "date": "07.12.2016",
        "time": "13:06",
        "name": "МРТ Стопа"
    },
    {
        "date": "26.09.2017",
        "time": "17:06",
        "name": "Электронейромиография (ЭНМГ)"
    },
    {
        "date": "07.12.2016",
        "time": "13:06",
        "name": "МРТ Шейный отдел позовоночника"
    },
    {
        "date": "07.12.2016",
        "time": "17:06",
        "name": "Электронейромиография"
    },
    {
        "date": "07.12.2016",
        "time": "13:06",
        "name": "МРТ Стопа"
    },
    {
        "date": "07.12.2016",
        "time": "17:06",
        "name": "Электронейромиография"
    },
];

const cardContainer = document.getElementById('cardContainer');

cardData.forEach((data, index) => {
    const isPrimary = (index + 1) % 2 !== 0;
    const cardClass = isPrimary ? '--primary-card' : '';

    const cardHTML = `
        <div class="sidebar__wrapper ${cardClass}">
            <div class="sidebar__card">
                <div class="card__date-wrapper">
                    <p class="card__date">${data.date}</p>
                    <p class="card__time">${data.time}</p>
                </div>
                <p class="card__name">${data.name}</p>
            </div>
        </div>
    `;
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});
