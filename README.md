# ToDo List на React и TypeScript

Это простое приложение "Список задач", созданное с использованием React и TypeScript. Приложение позволяет пользователям добавлять, редактировать и удалять задачи с удобным интерфейсом.

## Функциональность

- Добавление новых задач
- Валидация ввода 
- Редактирование задач
- Удаление задач
- Адаптивный дизайн

## Технологический стек

- **React** — библиотека для создания пользовательских интерфейсов.
- **TypeScript** — язык программирования, добавляющий статическую типизацию в JavaScript.
- **Styled Components** — библиотека для стилизации компонентов React с использованием CSS-in-JS.

## Установка

1. **Клонируйте репозиторий:**

    ```bash
    git clone https://git@github.com:ElzaSharapova24/todoList.git
    ```

2. **Перейдите в директорию проекта:**

    ```bash
    cd todoList
    ```

3. **Установите зависимости:**

    ```bash
    npm install
    ```

4. **Запустите проект локально:**

    ```bash
    npm start
    ```

   Приложение будет доступно по адресу `http://localhost:3000`.

## Использование

1. Откройте приложение и введите задачу в текстовое поле.
2. Нажмите "Добавить" или нажмите "Enter", чтобы добавить задачу в список.
3. Чтобы отредактировать задачу, щелкните по тексту задачи и измените его.
4. Для удаления задачи нажмите на иконку "Удалить" рядом с задачей.

## Валидация

- Приложение не позволяет добавлять задачи, содержащие символ `!`, и выводит соответствующее сообщение об ошибке.
- Поле ввода не может быть пустым при добавлении задачи.

## Адаптивность

Приложение поддерживает мобильные устройства:
- Размер шрифта заголовков уменьшается на малых экранах.
- Отступы контейнеров изменяются для лучшего отображения на мобильных устройствах.

