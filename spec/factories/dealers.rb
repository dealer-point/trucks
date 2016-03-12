# == Schema Information
#
# Table name: dealers
#
#  id         :integer          not null, primary key
#  title      :string
#  subdomain  :string
#  city       :string
#  country    :string
#  language   :string
#  timezone   :string           default("Europe/Moscow")
#  active     :boolean          default(TRUE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :dealer do
    title Faker::Company.name
    sequence(:subdomain) { |n| "subdomain#{n}" }
  end
end
