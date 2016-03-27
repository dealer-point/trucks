module Requests
  module JsonHelpers
    def json
      JSON.parse(response_body)
    end
  end
end
