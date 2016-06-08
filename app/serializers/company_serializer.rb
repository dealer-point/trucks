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
#

class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :country, :description, :created_by, :owner_name, :short_name, :phone, :site

  def created_by
    scope.as_json(only: [:id, :name, :lastname])
  end
end
