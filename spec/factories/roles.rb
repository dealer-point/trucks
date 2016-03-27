# == Schema Information
#
# Table name: roles
#
#  id         :integer          not null, primary key
#  title      :string
#  activities :string           default([]), is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :role do
    sequence(:title) { |n| "role#{n}" }
    factory :role_with_activities do
      activities %w(role:create role:show role:update role:destroy')
    end
  end
end
