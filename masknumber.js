const inputsPhone = document.querySelectorAll('.phone');
const maskTemplate = '+7(___) ___-__-__';

const applyMask = (el) => {
    // Убирает все символы, кроме цифр, начиная с индекса 2 (пропускает "+7")
    let value = el.value.replace(/\D+/g, '').slice(1);

    // Разбиение маски на массив символов
    const mask = maskTemplate.split('');

    // Заменяет подчеркивания в маске на цифры
    let cursor = 0;
    mask.forEach((char, i) => {
        if (char === '_' && value[cursor]) {
            mask[i] = value[cursor];
            cursor++;
        }
    });
    // Присваивает обновленную маску в поле
    el.value = mask.join('');
};

const handleKeydown = (e) => {
    const input = e.target;
    const start = input.selectionStart;
    const end = input.selectionEnd;

    // Запрещает удаление "+7"
    if (start < 3 && (e.key === 'Backspace' || e.key === 'Delete')) {
        e.preventDefault();
        return;
    }

    // При нажатии Backspace удаляет символ перед курсором
    if (e.key === 'Backspace' && start > 3) {
        e.preventDefault();
        const newValue = input.value.split('');
        const deletePos = start - 1;

        // Заменяет удаляемую цифру на подчеркивание
        if (/\d/.test(newValue[deletePos])) {
            newValue[deletePos] = '_';
        }
        input.value = newValue.join('');
        input.setSelectionRange(deletePos, deletePos);
    }

    // При нажатии Delete удаляет символ после курсора
    if (e.key === 'Delete' && start < input.value.length) {
        e.preventDefault();
        const newValue = input.value.split('');

        if (/\d/.test(newValue[start])) {
            newValue[start] = '_';
        }
        input.value = newValue.join('');
        input.setSelectionRange(start, start);
    }
};

// Инициализация поля с фиксированным "+7"
inputsPhone.forEach((el) => {
    // Устанавливает маску по умолчанию
    el.value = maskTemplate;

    // Обработчик ввода
    el.addEventListener('input', (e) => {
        let input = e.target;

        // Применяем маску при каждом вводе
        applyMask(input);

        // Перемещаем курсор к следующему подчеркиванию
        let pos = input.value.indexOf('_');
        if (pos === -1) {
            // Если нет подчеркиваний, курсор в конец
            pos = input.value.length;
        }
        // Устанавливает позицию курсора
        input.setSelectionRange(pos, pos);
    });

    // Обработка клавиш для удаления символов
    el.addEventListener('keydown', handleKeydown);

    // Фиксирует "+7" так, чтобы его нельзя было удалить
    el.addEventListener('keydown', (e) => {
        if (e.target.selectionStart < 3 && e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') {
            // Запрещает удаление или изменение "+7"
            e.preventDefault();
        }
    });
});