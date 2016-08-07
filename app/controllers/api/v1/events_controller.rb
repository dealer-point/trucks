class Api::V1::EventsController < Api::V1::BaseController
  def index
    @events = policy_scope(Event).includes(:created_by, :assigned_by)
                                 .page(params[:page])
                                 .per(500_000)

    render_api json: @events.as_json(only: [:id, :kind, :status, :assigned_at, :title],
                                     methods: [:overdue, :assigned_at_timestamp],
                                     include: {
                                       created_by: { only: [:id, :name, :lastname] },
                                       assigned_by: { only: [:id, :name, :lastname] }
                                     }),
               meta: meta_attributes(@events), status: :ok
  end

  def show
    event = Event.find(params[:id])

    authorize(event)

    render_api json: event.as_json(methods: [:overdue, :assigned_at_timestamp, :date, :time],
                                   include: {
                                     created_by: { only: [:id, :name, :lastname] },
                                     assigned_by: { only: [:id, :name, :lastname] }
                                   }),
               status: :ok
  end

  def create
    event = Event.new(event_params)

    event.created_by = current_user

    user_id = params[:assigned_by][:id] if params[:assigned_by].present?
    event.assigned_by = User.find_by_id(user_id)

    authorize(event)

    if event.save
      render_api json: event.as_json(only: [:id, :kind, :status, :assigned_at, :title],
                                     methods: [:overdue, :assigned_at_timestamp, :date, :time],
                                     include: {
                                       created_by: { only: [:id, :name, :lastname] },
                                       assigned_by: { only: [:id, :name, :lastname] }
                                     }),
                 status: :ok
    else
      render json: { errors: event.errors }, status: :unprocessable_entity
    end
  end

  def update
    event = Event.find(params[:id])

    event.assign_attributes(event_params)

    user_id = params[:assigned_by][:id] if params[:assigned_by].present?
    event.assigned_by = User.find_by_id(user_id)

    authorize(event)

    if event.save
      render_api json: event.as_json(only: [:id, :kind, :status, :assigned_at, :title],
                                     methods: [:overdue, :assigned_at_timestamp, :date, :time],
                                     include: {
                                       created_by: { only: [:id, :name, :lastname] },
                                       assigned_by: { only: [:id, :name, :lastname] }
                                     }),
                 status: :ok
    else
      render json: { errors: event.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    event = Event.find(params[:id])

    authorize(event)

    if event.destroy
      head :ok
    else
      head :errors
    end
  end

  private

  def event_params
    if params[:date].present? && params[:time].present?
      time = params[:time].to_datetime
      params[:assigned_at] = params[:date].to_datetime + time.hour.hours + time.minute.minutes
    end

    params.permit(:title, :assigned_at, :description, :kind)
  end
end
