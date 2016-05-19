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

class Company < ApplicationRecord
  validates :title, presence: true
end
