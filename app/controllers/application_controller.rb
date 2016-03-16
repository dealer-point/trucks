class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def current_user
    # Session auth
    @current_user ||= session.present? && session[:user_id].present? && User.find_by_id(session[:user_id])
  end
  helper_method :current_user

  def current_dealer
    @current_dealer ||= Dealer.current
  end
  helper_method :current_dealer
end
