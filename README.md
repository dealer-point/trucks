![Alt text](http://globus-motors.dealerpoint.ru/images/logo.png)
# TruckPoint - CRM for Trucks
IT DealerPoint

Contributors:
> 1. Kasparov I. <ikasparov.dev@gmail.com>


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
  database: truckpoint
  username: dbuser
  password: dbpass
  pool: 5
  host: localhost
  port: 5432
test:
  adapter: postgresql
  encoding: utf8
  database: truckpoint
  username: dbuser
  password: dbpass
  pool: 5
  host: localhost
  port: 5432

```
4. Устанавливаем foreman `gem install foreman`
5. Запускаем `foreman start`


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
