# == Schema Information
#
# Table name: companies
#
#  id          :integer          not null, primary key
#  title       :string
#  owner_name  :string
#  website     :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

FactoryGirl.define do
  factory :company do
    title { Faker::Company.name }
    owner_name { Faker::Name.name }
    website { "http://#{Faker::Internet.domain_name}" }
    description { Faker::Lorem.sentence }
  end
end
