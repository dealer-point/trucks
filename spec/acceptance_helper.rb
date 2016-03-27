require 'rails_helper'
require 'rspec_api_documentation'
require 'rspec_api_documentation/dsl'

API_HOST = 'app.dealerpoint.biz'

RspecApiDocumentation.configure do |config|
  config.format = [:json, :combined_text, :html]
  config.curl_host = "http://#{API_HOST}"
  config.api_name = 'DealerPoint Trucks API'
end

RSpec.configure do |config|
  config.include Requests::JsonHelpers
end
