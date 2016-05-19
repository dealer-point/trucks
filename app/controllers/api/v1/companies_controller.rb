class Api::V1::CompaniesController < Api::V1::BaseController
  def index
    render json: { collection: Company.all }, status: 200
  end
end
