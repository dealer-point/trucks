require 'acceptance_helper'

resource 'Users' do
  header 'Host', API_HOST
  parameter :token, 'Authentication Token', required: true

  let(:role) { create(:role_with_activities) }
  let(:user) { create(:user, roles: [role]) }
  let(:token) { user.token }

  get '/api/v1/users/current' do
    example 'Current user detail' do
      do_request
      expect(status).to be 200

      user_json = JSON.parse(response_body)
      expect(user_json['id']).to eq user.id
      expect(user_json['activities']).to eq user.activities
    end
  end
end
