require 'rails_helper'

RSpec.describe Role, type: :model do
  it 'has a valid factory' do
    role = build(:role)
    expect(role).to be_valid
  end

  it 'invalid without a title' do
    role = build(:role, title: nil)
    expect(role).to_not be_valid
  end
end
