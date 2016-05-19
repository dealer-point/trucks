class SessionsController < ApplicationController

  layout 'session'

  skip_after_action :verify_authorized

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_email(user_params[:email])

    if @user.try(:authenticate, user_params[:password])
      session[:user_id] = @user.id
      redirect_to root_path
    else
      @user = User.new
      @user.email = user_params[:email]
      @error_message = I18n.t('sessions.invalid_login')
      render :new
    end
  end

  def logout
    reset_session
    redirect_to new_sessions_path
  end

  private

  def user_params
    params.require(:user).permit(:email, :password).tap do |user_data|
      user_data[:email].strip!
      user_data[:password].strip!
    end
  end
end
