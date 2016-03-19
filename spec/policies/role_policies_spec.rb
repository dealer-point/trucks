require 'rails_helper'

describe RolePolicy do
  subject { RolePolicy }

  let(:role) { create(:role) }
  let(:user) { create(:user) }

  context 'given user\'s role activities' do
    permissions :create? do
      context 'without role:create' do
        before(:each) { user.roles << create(:role, activities: %w(role:show)) }

        it 'denies' do
          should_not permit(user, role)
        end
      end

      context 'with role:create' do
        before(:each) { user.roles << create(:role, activities: %w(role:create role:show)) }

        it 'allow' do
          should permit(user, role)
        end
      end
    end

    permissions :update? do
      context 'without role:update role activity' do
        before(:each) { user.roles << create(:role, activities: %w(role:show)) }

        it 'denies' do
          should_not permit(user, role)
        end
      end

      context 'with person:update' do
        before(:each) { user.roles << create(:role, activities: %w(role:update)) }
        it 'allow' do
          should permit(user, role)
        end
      end
    end
  end
end
