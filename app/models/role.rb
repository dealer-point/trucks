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

class Role < ApplicationRecord
  has_and_belongs_to_many :users

  validates :title, presence: :true
end
