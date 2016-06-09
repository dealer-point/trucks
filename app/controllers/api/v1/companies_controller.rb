class Api::V1::CompaniesController < Api::V1::BaseController

  before_action :set_company, only: [:show, :update, :destroy]

  def index
    @companies = policy_scope(Company).includes(:created_by).order(:id).page(params[:page]).per(500000)

    render_api json: @companies.as_json(only: [:id, :name, :city, :country, :phone]), meta: meta_attributes(@companies), status: :ok
  end

  def show
    render_api json: @company.as_json(include: { created_by: { only: [:id, :name, :lastname] }}), status: :ok
  end

  def create
    company = Company.new company_params
    company.created_by = current_user

    authorize company

    if company.save
      render_api json: company.as_json(only: [:id, :name, :city, :country, :phone]), status: :created
    else
      render json: { errors: company.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @company.update company_params
      render json: @company, status: :accepted
    else
      render json: { errors: @company.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    if @company.destroy
      render json: @company, status: :ok
    else
      render json: { errors: @company.errors }, status: :unprocessable_entity
    end
  end

  private

    def company_params
      params.permit(:name, :city, :country, :description)
    end

    def set_company
      @company = Company.find(params[:id])
      authorize @company
    end
end
