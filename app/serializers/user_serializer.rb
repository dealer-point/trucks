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

class UserSerializer < ActiveModel::Serializer
  attributes :id, :activities, :name, :lastname
end
