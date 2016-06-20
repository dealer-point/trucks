# == Schema Information
#
# Table name: events
#
#  id             :integer          not null, primary key
#  kind           :string
#  status         :string           default("pending")
#  created_by_id  :integer
#  description    :text
#  assigned_by_id :integer
#  assigned_at    :datetime
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  title          :string
#

class Event < ApplicationRecord

  KINDS = %w(incoming_call outgoing_call meet request)
  STATUSES = %w(pending done canceled)

  belongs_to :created_by, class_name: 'User'
  belongs_to :assigned_by, class_name: 'User'

  has_many :comments, as: :target, dependent: :destroy

  validates :title, presence: true
  validates :kind, presence: true, inclusion: { in: KINDS }
  validates :status, presence: true, inclusion: { in: STATUSES }
  validates :assigned_at, presence: true

  def overdue
    DateTime.current > assigned_at and status === 'pending'
  end

  def assigned_at_timestamp
    assigned_at.to_i
  end

end
