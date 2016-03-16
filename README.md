![Alt text](http://globus-motors.dealerpoint.ru/images/logo.png)
# TruckPoint - CRM for Trucks
IT DealerPoint

Contributors:
> 1. Kasparov I. <ikasparov.dev@gmail.com>


Ruby version - 2.3.0

## This is FRONTEND, baby

#### Настройка окружения:
1. Выполнить настройку back-end
2. Установка node `sudo apt-get install nodejs nodejs-legacy npm`
3. Уствнока пакетов в глобал
```bash
sudo npm install --global webpack
sudo npm install --global gulp
sudo npm install --global typings
```
4. Установка npm-пакетов `npm install`

#### Запуск webpack в режиме development:
`npm run start`

Webpack начнет сборку приложения, и по ее окончанию будет вотчить front-end приложение

#### Запуск webpack для компиляции production:
`npm run build`

### Как это все работает?
#### Gulp
Gulp имеет 2 задачи, которые собирают основной набор плагинов `gulp common_js` и uikit `gulp uikit_js`. Эти задачи выполняются автоматически после установки компонентов npm. **Не рекомендуется трогать эти задачи. Если все-таки Вы изменили скрипты gulp'a, то при перезапуске `npm run start` или `npm run build` автоматически запустится пересоборка.

#### Webpack
Webpack выполняет сборку front-end приложения

#### Typings (The manager for TypeScript definitions)
Typings это классная штука которая позволяет загрузить файлы с описанием плагина, понятным TypeScript'у.
Установка *.d.ts файлов выполняется командой `typings install --ambient --save <название плагина>`.

Если Вам не повезло и *.d.ts файла для Вашего плагина нет, то Вы должны его объявить сами. Делается это в файле `declarations.d.ts`.
Вот примитивное описание плагина `Waves`:
```bash
/*
  Declare 'Waves' module
*/
interface IWaves {
  init(): Function;
}
declare var Waves: IWaves;
```


### Основы
1. Фронтенд находится в `/app/frontend`
2. Точка входа приложения `app.ts`
3. Папка `assets` содержит дополнительные плагины, стили и файлы

### TODO:
1. Надо что то придумать со стилями. Стили должны начать собираться через Gulp.
