class Api::V1::OffersController < Api::V1::BaseController
  before_action :set_offer, only: [:show, :destroy]

  def index
    @offers = policy_scope(Offer).order(:id).page(params[:page]).per(500000)
    render json: @offers, meta: meta_attributes(@offers), root: 'collection', status: :ok
  end

  def show
    render json: @offer, status: :ok
  end

  def create
    offer = Offer.new offer_params
    offer.user = current_user
    offer.company = Company.first

    authorize offer

    if offer.save
      render json: offer, status: :created
    else
      render json: { errors: offer.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    authorize @offer
    if @offer.destroy
      render json: @offer, status: :ok
    else
      render json: { errors: @offer.errors }, status: :unprocessable_entity
    end
  end

  private

  def set_offer
    @offer = Offer.find(params[:id])
    authorize @offer
  end

  def offer_params
    params.permit(:name, data: [:uuid, :kind, :data])
  end
end
