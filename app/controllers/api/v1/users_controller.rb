class Api::V1::UsersController < Api::V1::BaseController
  def index
    @users = policy_scope(User).page(params[:page]).per(500_000)
    render_api json: @users.as_json(only: [:id, :name, :lastname], methods: [:title]),
               status: :ok
  end

  def show
    user = User.find params[:id]
    render json: user,
           status: :ok
  end

  def current
    authorize current_user

    render_api json: current_user.as_json(only: [:id, :name, :lastname], methods: [:activities]),
               status: :ok
  end

  def create
    user = User.new user_params
    if user.save
      render json: user,
             status: :ok
    else
      render json: { errors: user.errors },
             status: 422
    end
  end

  def update
    user = User.find params[:id]
    if user.update user_params
      render json: user,
             status: 422
    else
      render json: { errors: user.errors },
             status: 422
    end
  end

  def destroy
    user = User.find params[:id]
    if user.destroy
      render json: user,
             status: :ok
    else
      render json: { errors: user.errors },
             status: 422
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :name, :last_name, :phone)
  end
end
