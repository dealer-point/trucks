# == Schema Information
#
# Table name: offers
#
#  id         :integer          not null, primary key
#  data       :json
#  name       :string
#  version    :integer          default(0)
#  company_id :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class OfferSerializer < ActiveModel::Serializer
  attributes :id, :name, :data
end
