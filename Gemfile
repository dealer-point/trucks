source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.0'
gem 'pg'
# Use Puma as the app server
gem 'puma', '~> 3.0'
gem 'jbuilder', '~> 2.5'
gem 'pundit'
gem 'apartment'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'
gem 'unicorn'
gem 'awesome_print'
gem 'kaminari'
gem 'phonelib'
# Classier solution for file uploads for Rails, Sinatra and other Ruby web frameworks
gem 'carrierwave'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri

  gem 'rspec'
  gem 'rspec-core'
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'faker'
  gem 'database_cleaner'
  gem 'rspec_api_documentation'
end

group :development do
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'

  # Deploy
  gem 'mina'
  gem 'mina-unicorn', :require => false
  gem 'mina-multistage', require: false

  gem 'foreman'
  gem 'pry-rails'
  gem 'rubocop', require: false
  gem 'guard'
  gem 'guard-migrate'
  gem 'guard-bundler'
  gem 'guard-rspec', '~> 4.6', require: false
  gem 'guard-rubocop'
  gem 'guard-annotate'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
