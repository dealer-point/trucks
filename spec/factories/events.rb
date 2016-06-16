# == Schema Information
#
# Table name: events
#
#  id              :integer          not null, primary key
#  kind            :string
#  status          :string           default("pending")
#  created_by_id   :integer
#  description     :text
#  assigned_by_id  :integer
#  processed_by_id :integer
#  assigned_at     :datetime
#  processed_at    :datetime
#  target_type     :string
#  target_id       :integer
#  parent_type     :string
#  parent_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :event do
    kind { Event::KINDS.sample }
    status { Event::STATUSES.sample }
    created_by { User.all.sample }
    description { Faker::Lorem.sentence }

    assigned_by { User.all.sample }
    assigned_at {
      to = DateTime.current.to_f
      from = 1.month.from_now.to_f
      Time.at(rand * (to - from) + from)
    }

    processed_by { User.all.sample }
    processed_at {
      to = DateTime.current.to_f
      from = 1.month.from_now.to_f
      Time.at(rand * (to - from) + from)
    }
  end
end


# FactoryGirl.define do
#   factory :company do
#     name { Faker::Company.name }
#     city { Faker::Address.city }
#     country { Faker::Address.country }
#     description { Faker::Lorem.sentence }
#     created_by { User.last }
#     short_name { Faker::Company.name.slice(0, 5) }
#     owner_name { "#{Faker::StarWars.character}" }
#     phone { "+7 904 #{rand(8888888) + 1111111}" }
#     site { "http://#{Faker::Internet.domain_name}" }
#   end
# end
