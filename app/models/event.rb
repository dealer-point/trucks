# == Schema Information
#
# Table name: events
#
#  id              :integer          not null, primary key
#  kind            :string
#  status          :string           default("pending")
#  created_by_id   :integer
#  description     :text
#  assigned_by_id  :integer
#  processed_by_id :integer
#  assigned_at     :datetime
#  processed_at    :datetime
#  target_type     :string
#  target_id       :integer
#  parent_type     :string
#  parent_id       :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Event < ApplicationRecord

  KINDS = %w(incoming_call outgoing_call meet request)
  STATUSES = %w(pending done canceled)

  belongs_to :created_by, class_name: 'User', optional: true
  belongs_to :assigned_by, class_name: 'User', optional: true
  belongs_to :processed_by, class_name: 'User', optional: true

  belongs_to :parent, polymorphic: true, optional: true
  belongs_to :target, polymorphic: true, optional: true

  has_many :comments, as: :target, dependent: :destroy

  validates :kind, presence: true, inclusion: { in: KINDS }
  validates :status, presence: true, inclusion: { in: STATUSES }

  validates :processed_by, presence: true, unless: "status.eql?('pending')"

  def overdue
    DateTime.current > assigned_at and status === 'pending'
  end

end
