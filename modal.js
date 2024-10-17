document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeBtn = document.querySelector('.close-btn');
    const form = document.getElementById('personalDataForm');

    openModalBtn.onclick = function () {
        modal.style.display = 'block';
    };

    closeBtn.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Показать/скрыть пароль 
    document.querySelectorAll('.toggle-password').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const target = document.getElementById(btn.getAttribute('data-target'));
            const type = target.getAttribute('type') === 'password' ? 'text' : 'password';
            target.setAttribute('type', type);

            // Смена иконки показать/скрыть
            const img = btn.querySelector('.show-password-icon');
            img.src = type === 'password' ? './img/eye_opened.svg' : './img/eye_closed.svg';
        });
    });

    // Валидация формы
    function handleSubmit(event) {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Пароли не совпадают');
        } else {
            alert('Спасибо за ваше обращение!');

            if (modal) {
                modal.style.display = 'none';
            }
        }
    }
    // Отрботка callback - handleSubmit передается как аргумент в метод addEventListener
    form.addEventListener('submit', handleSubmit);
});