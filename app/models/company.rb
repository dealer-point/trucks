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
#  short_name    :string
#  owner_name    :string
#  phone         :string
#  site          :string
#  logo          :string
#

class Company < ApplicationRecord

  mount_uploader :logo, CompaniesLogoUploader

  belongs_to :created_by, class_name: 'User', foreign_key: 'created_by_id'

  validates :name, presence: true, length: { minimum: 4 }
  validates :city, :country, presence: true, length: { minimum: 2 }
  validates :phone, presence: true, phone: true, if: "phone.present?"

end
