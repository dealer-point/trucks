require 'rails_helper'

RSpec.describe Dealer, type: :model do
  it 'has a valid factory' do
    role = build(:role)
    expect(role).to be_valid
  end
end
