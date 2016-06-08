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

class Offer < ApplicationRecord
  belongs_to :user
  belongs_to :company

  validates :company, :user, :name, :data, :version, presence: true

  before_save :set_version

  private

  def set_version
    self.version += 1
  end
end
