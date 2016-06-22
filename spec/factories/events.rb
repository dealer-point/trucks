# == Schema Information
#
# Table name: events
#
#  id             :integer          not null, primary key
#  kind           :string
#  status         :string           default("pending")
#  created_by_id  :integer
#  description    :text
#  assigned_by_id :integer
#  assigned_at    :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  title          :string
#

FactoryGirl.define do
  factory :event do
    title { "Contact with #{Faker::Beer.name}" }
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
    # processed_by { User.all.sample }
    # processed_at {
    #   to = DateTime.current.to_f
    #   from = 1.month.from_now.to_f
    #   Time.at(rand * (to - from) + from)
    # }
  end
end
