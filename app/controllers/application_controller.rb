class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  def current_user
    @current_user ||= authorize_by_token || authorize_by_session
  end
  helper_method :current_user

  def current_dealer
    @current_dealer ||= Dealer.current
  end
  helper_method :current_dealer

  private

  def authorize_by_token
    params[:token].present? && User.find_by_token(params[:token])
  end

  def authorize_by_session
    session[:user_id].present? && User.find_by_id(session[:user_id])
  end
end
