class Api::V1::EventsController < Api::V1::BaseController

  def index
    @events = policy_scope(Event).includes(:created_by, :assigned_by).order(:assigned_at).page(params[:page]).per(500000)

    render_api json: @events.as_json(only: [:id, :kind, :status, :description, :assigned_at], methods: [:overdue], include: { created_by: { only: [:id, :name, :lastname] }, assigned_by: { only: [:id, :name, :lastname] } }), meta: meta_attributes(@events), status: :ok
  end

  def create

  end

end
