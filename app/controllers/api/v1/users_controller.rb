class Api::V1::UsersController < Api::V1::BaseController
  def index
    render json: User.all, status: 200
  end

  def show
    user = User.find params[:id]
    render json: user, status: 200
  end

  def current
    authorize current_user
    render json: current_user, status: 200
  end

  def create
    user = User.new user_params
    if user.save
      render json: user, status: 200
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def update
    user = User.find params[:id]
    if user.update user_params
      render json: user, status: 422
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def destroy
    user = User.find params[:id]
    if user.destroy
      render json: user, status: 200
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  private

  def user_params
    params.permit(:email, :password, :password_confirmation, :name, :last_name, :phone)
  end
end
