# == Schema Information
#
# Table name: companies
#
#  id            :integer          not null, primary key
#  name          :string
#  city          :string
#  country       :string
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  created_by_id :integer
#  short_name    :string
#  owner_name    :string
#  phone         :string
#  site          :string
#

FactoryGirl.define do
  factory :company do
    name { Faker::Company.name }
    city { Faker::Address.city }
    country { Faker::Address.country }
    description { Faker::Lorem.sentence }
    created_by { User.last }
    short_name { Faker::Company.name.slice(0, 5) }
    owner_name { "#{Faker::StarWars.character}" }
    phone { "+7 904 #{rand(8888888) + 1111111}" }
    site { "http://#{Faker::Internet.domain_name}" }
  end
end
