# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  name            :string
#  lastname        :string
#  phone           :string
#  token           :string
#  locale          :string           default("en")
#  timezone        :string           default("Europe/Moscow")
#  active          :boolean          default(TRUE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :user do
    name 'test user'
    password 'qwerty'
    sequence(:email) { |n| "mail#{n}@example.com" }
  end
end
