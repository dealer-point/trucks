# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  target_type :string
#  target_id   :integer
#  text        :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :target, polymorphic: true

  validates :text, presence: true
end
