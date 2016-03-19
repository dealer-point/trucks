require 'rails_helper'

resource 'Users' do
  get '/api/v1/users/current' do
    example 'current user detail' do
      header 'Host', 'app.example.com'
      do_request
      expect(status).to be 200
    end
  end
end
