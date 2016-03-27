require 'acceptance_helper'

resource 'Users' do
  header 'Host', API_HOST
  parameter :token, 'Authentication Token', required: true

  let(:role) { create(:role_with_activities) }
  let(:user) { create(:user, roles: [role]) }
  let(:token) { user.token }

  get '/api/v1/users/current' do
    before(:each) { do_request }
    example 'Current user detail' do
      expect(status).to be 200
      json_user = json['user']
      expect(json_user).to be
      expect(json_user['id']).to eq user.id
      expect(json_user['activities']).to eq user.activities
    end
  end
end
