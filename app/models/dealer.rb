# == Schema Information
#
# Table name: public.dealers
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

  after_create :create_tenant
  after_destroy :drop_tenant

  def switch!
    Apartment::Tenant.switch! subdomain
  end

  def fill_demo!
    switch!
    # TODO: тут должна быть генерация демо данных
  end

  def self.switch!(value)
    value.is_a?(String) ? Apartment::Tenant.switch!(value) : find(value).try(:switch!)
  end

  def self.current
    @current ||= find_by_subdomain(Apartment::Tenant.current)
  end

  private

  def create_tenant
    Apartment::Tenant.create(subdomain)
  end

  def drop_tenant
    Apartment::Tenant.drop(subdomain)
  end
end
