## Структура проекта

```
Playwright_API/
│
├── allure-report/
├── src/
│     ├── constants/
│     │     ├── graphql/
│     │     └── rest/
│     │          ├── categories.data.ts
│     │          ├── product.data.ts
│     │          └── user.data.ts
│     │
│     ├── enum/
│     │     ├── message.enum.ts
│     │     └── status.enum.ts
│     │
│     ├── fixtures/
│     │     ├── graphql/
│     │     └── rest/
│     │          ├── categories.fixtures.ts
│     │          ├── products.fixtures.ts
│     │          └── users.fixtures.ts
│     │
│     ├── types/
│     │     ├── graphql/
│     │     └── rest/
│     │          ├── auth.JWT.types.ts
│     │          ├── categories.types.ts
│     │          ├── locations.types.ts
│     │          ├── product.types.ts
│     │          └── users.types.ts
│     │
│     └── urls/
│           └── api-urls.ts
│
├── tests/
│     ├── documentation.spec.ts
│     ├── mock.users.spec.ts
│     ├── graphql.auth.JWT.spec.ts
│     ├── graphql.products.spec.ts
│     ├── graphql.users.spec.ts
│     ├── rest.auth.JWT.spec.ts
│     ├── rest.categories.spec.ts
│     ├── rest.locations.spec.ts
│     ├── rest.products.filter.spec.ts
│     ├── rest.products.spec.ts
│     └── rest.users.spec.ts
│
├── playwright.config.ts
├── package-lock.json
├── package.json
├── api.config.ts
└── README.md
```

## Инструкция по запуску

## 1. Установка зависимостей

```bash
npm install
```

## 2. Установка браузеров Playwright

```bash
npx playwright install
```

## 3. Запуск тестов

### Режим без графического интерфейса

```bash
npx playwright test
```

### Режим с графическим интерфейсом

```bash
npx playwright test --ui
```

## 4. Просмотр отчетов

### Генерация отчета Allure

```bash
npx playwright test --reporter=allure-playwright

npx allure generate allure-results --clean
```

### Открытие отчета

```bash
npx allure open
```

### Быстрый просмотр (одна команда)

```bash
npx playwright test --reporter=allure-playwright && npx allure serve
```

### Генерация отчета Playwright

```bash
npx playwright test --reporter=html

npx playwright show-report
```

### Быстрый просмотр Playwright HTML (одна команда)

```bash
npx playwright test --reporter=html && npx playwright show-report
```

## 5. Настройка окружения
Для пользовательской настройки создайте файл .env:

```bash
USER_EMAIL=test@mail.com
USER_PASSWORD=password
```
