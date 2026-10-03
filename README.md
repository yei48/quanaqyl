# QuanAQYL A+

Сайт-кабинет для подготовки по физике: диагностика, сложные задачи, план обучения, прогресс, награды, заморозка занятий и редактируемый профиль ученика.

## Что добавлено

- Вход через встроенный **Sign in with ChatGPT** для Sites.
- Личный профиль: фото, имя, школа/университет, класс или курс, город, цели, интересы, часы обучения, «О себе».
- Номер телефона как поле профиля. SMS-вход пока не подключён, потому что в проекте нет SMS/Auth-провайдера.
- Сохранение профиля, фото, попыток, наград и пауз в D1/R2 через API.
- Интерфейс на русском, казахском и английском.
- Сложные задачи по физике A-level и базовая диагностика.

## Как запустить локально

Нужен Node.js 22+.

```bash
corepack enable
pnpm install
pnpm run dev
```

Для production-сборки:

```bash
pnpm run build
```

Для генерации SQL-миграций:

```bash
pnpm run db:generate
```

## Как закинуть в Git

```bash
git init
git add .
git commit -m "Add QuanAQYL A+ learning portal"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Если репозиторий уже создан, перейди в папку проекта и выполни:

```bash
git remote add origin https://github.com/<username>/<repo>.git
git add .
git commit -m "Update QuanAQYL A+"
git push -u origin main
```

## Важное про телефонную регистрацию

Сейчас пользователи могут войти через ChatGPT, а номер телефона хранится в профиле как контактное поле. Чтобы сделать настоящий вход по SMS-коду, нужно подключить отдельный auth/SMS-сервис и добавить серверную проверку кодов. В этом коде SMS-вход не имитируется.
