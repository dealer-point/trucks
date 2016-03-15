# == Schema Information
#
# Table name: dealers
#
#  id         :integer          not null, primary key
#  title      :string
#  subdomain  :string
#  city       :string
#  country    :string
#  language   :string
#  timezone   :string           default("Europe/Moscow")
#  active     :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Dealer, type: :model do
  it 'has a valid factory' do
    dealer = build(:dealer)
    expect(dealer).to be_valid
  end

  it 'invalid without a subdomain' do
    dealer = build(:dealer, subdomain: nil)
    expect(dealer).to_not be_valid
  end

  it 'invalid with wrong format' do
    dealer = build(:dealer, subdomain: 't_1')
    expect(dealer).to_not be_valid
    dealer = build(:dealer, subdomain: '-')
    expect(dealer).to_not be_valid
  end

  it 'does not allow duplicate subdomain' do
    create(:dealer, subdomain: 'mytest')
    dealer2 = build(:dealer, subdomain: 'mytest')
    expect(dealer2).to_not be_valid
  end

  it 'is invalid without a title' do
    dealer = build(:dealer, title: nil)
    expect(dealer).to_not be_valid
  end
end
