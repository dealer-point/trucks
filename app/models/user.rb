# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string
#  password_digest :string
#  name            :string
#  lastname        :string
#  phone           :string
#  token           :string
#  locale          :string           default("en")
#  timezone        :string           default("Europe/Moscow")
#  active          :boolean          default(TRUE)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  has_secure_password
  has_secure_token

  validates :email, presence: true, uniqueness: true

  scope :active, -> { where(active: true) }
end
