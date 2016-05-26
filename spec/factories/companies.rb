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
#

FactoryGirl.define do
  factory :company do
    title { Faker::Company.name }
    owner_name { Faker::Name.name }
    website { "http://#{Faker::Internet.domain_name}" }
    description { Faker::Lorem.sentence }
  end
end
