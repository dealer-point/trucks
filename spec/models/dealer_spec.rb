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
    create(:dealer).should be_valid
  end

  it 'invalid without a subdomain' do
    build(:dealer, subdomain: nil).should_not be_valid
  end

  it 'invalid with wrong format' do
    build(:dealer, subdomain: 't_1').should_not be_valid
    build(:dealer, subdomain: '-').should_not be_valid
  end

  it 'does not allow duplicate subdomain' do
    create(:dealer, subdomain: 'mytest')
    build(:dealer, subdomain: 'mytest').should_not be_valid
  end

  it 'is invalid without a title' do
    build(:dealer, title: nil).should_not be_valid
  end

  it 'returns a array of active dealers' do
    dealer1 = create(:dealer, active: true)
    dealer2 = create(:dealer, active: true)
    create(:dealer, active: false)

    Dealer.active.should == [dealer1, dealer2]
  end
end
