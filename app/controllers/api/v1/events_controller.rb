class Api::V1::EventsController < Api::V1::BaseController

  def index
    @events = policy_scope(Event).order(:id).page(params[:page]).per(500000)

    render_api json: @events.as_json(only: [:id, :kind, :status, :description]), meta: meta_attributes(@events), status: :ok
  end

  def create

  end

end
