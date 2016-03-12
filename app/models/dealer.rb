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

class Dealer < ApplicationRecord
  validates :title, presence: true
  validates :subdomain, presence: true, format: /\A[a-z\d]+(-[a-z\d]+)?\z/i, uniqueness: true

  scope :active, -> { where(active: true) }
end
