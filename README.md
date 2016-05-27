![Alt text](http://globus-motors.dealerpoint.ru/images/logo.png)
# TruckPoint - CRM for Trucks
IT DealerPoint

Contributors:
> Anikin D. <mr.ads@yandex.ru>
> Kasparov I. <ikasparov.dev@gmail.com>
> Dmitry Y. <hds101@gmail.com>


Ruby version - 2.3.0

# Back-end getting started
### Настройка окружения
1. Устанавливаем гемы `bundle install`
2. Создаем `config/secrets.yml` и генерируем ключ `rake secret`
```yml
development:
  secret_key_base: <key>
test:
  secret_key_base: <key>
production:
  secret_key_base: <%= ENV["SECRET_KEY_BASE"] %>
```
3. Создаём `config/database.yml` и создаём бд `rake db:create`
```yml
development:
  adapter: postgresql
  encoding: utf8
  database: truckpoint_development
  username: postgres
  password: postgres
  pool: 5
  host: localhost
  port: 5432
test:
  adapter: postgresql
  encoding: utf8
  database: truckpoint_test
  username: postgres
  password: postgres
  pool: 5
  host: localhost
  port: 5432
```

4. Запускаем `foreman start`


## Тестирование
1. Пишем код
```bash
rails g scaffold post title:string text:text
rake db:migrate
```
2. Пишем фабрику `spec/factories/post.rb`

```ruby
FactoryGirl.define do
  factory :post do
    title { Faker::Name.name }
    text { Faker::Lorem.paragraph(3) }
  end
end
```

3. Пишем спек spec/models/post_spec.rb

```ruby
require 'rails_helper'

RSpec.describe Post, type: :model do
  it 'should be valid' do
    post = FactoryGirl.create(:post)
    expect(post).to be_valid
  end
end
```

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
Установка *.d.ts файлов выполняется командой
`typings install dt~<название плагина> --global --save`

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

## Модули

Каждый модуль, встраиваемый в приложение должен упаковываться в виде angular модуля и содержать свои настройки, свой список маршрутов и свои декларации интерфейсов (по аналогии с модулем `common`).

### Структура
```
app/frontend
|-- app.ts
|-- declarations.d.ts
|-- app.jade
|-- config.ts
|-- routes.ts
|-- assets
    |-- template
        |-- fonts
        |-- icons
        |-- images
        |-- js
        |-- stylesheets
|-- main
    |-- index.ts *Основная точка входа модуля*
    |-- controllers
    |-- directives
    |-- modules
    |-- services
    |-- templates
|-- common *Модуль функционального ядра приложения*
|-- modules *Директория расположения дополнительных (подключаемых) модулей*
```
### Описание существующих модулей

Модуль `main` содержит компоненты и части, составляющие базовый функционал шаблона (altair admin). Если необходимо добавить какой то компонент из altair admin, то его необходимо добавлять в модуль `main`

Модуль `common` содержит основное ядро приложения, т. е. в его состав должны входить компоненты, предоставляющие базовый функционал приложения, например пользователи, роли и т. п.


# Дилеры

Модель Dealer - дилерские центры

## Создание дилера
Для разграничения данных дилеров используется гем [apartment](https://github.com/influitive/apartment)
Каждый дилер находится в своем изолированном пространстве и данные не пересекаются.
У каждого дилера свой поддомен и данные переключаются по нему, локально работать с дилером можно так: `mydealer.lvh.me:3000`

Для создание дилера можно воспользоваться соответствующей фабрикой:

```
    FactoryGirl.create(:dealer)
```
 или создать командой:

```
    my_dealer = Dealer.create!(sumdomain: 'example_subdomain', title: 'MyDealer')
```
## Переключение на дилера
 Для работы с моделями дилера вам необходимо переключится на его пространство

```
    my_dealer.switch!
```
 или

```
    Dealer.switch! 'example_subdomain_'
```
 так же можно переключится по ID дилер, например `ID = 1`

```
    Dealer.switch! 1
```
## Получение текущего дилера

Вы можете воспользоваться хелпером `current_dealer` в контролерах и вьюхах или получить его используя метод модели
`Dealer.current`

## Получение текущего дилера
Чтобы заполнить дилера данными

```
    my_dealer.switch!
    my_dealer.fill_demo
```

# Роли и права пользователя
У каждого пользователя может быть несколько ролей, а у каждой роли есть набор activities.
Право задается в виде `person:create` т.е. если в политике не задан метод `create?`, то сработает автоматическая проверка на наличие у пользователя `person:create` в его `activities`
см. [pundit](https://github.com/elabs/pundit)

## Фронт
Проверка через директиву `activity`
```html
   <div activity only="['role:show']"></div>
   <div activity only="['role:show', 'role:update']" except="['role:destroy']"></div>
   <div activity except="role:update"></div>
```

Проверка через сервис `CurrentUser`
```js
   import CurrentUser from "./services/current_user";

   CurrentUser.can("role:create")
```
