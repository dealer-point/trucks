class ApplicationController < ActionController::Base
  include Pundit
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Globally rescue Authorization Errors in controller.
  rescue_from Pundit::NotAuthorizedError, with: :permission_denied
  # Enforces access right checks for individuals resources
  after_action :verify_authorized, except: :index
  # Enforces access right checks for collections
  after_action :verify_policy_scoped, only: :index

  def current_user
    # Session auth
    @current_user ||= session.present? && session[:user_id].present? && User.find_by_id(session[:user_id])
  end
  helper_method :current_user

  def current_dealer
    @current_dealer ||= Dealer.current
  end
  helper_method :current_dealer

  private

  def permission_denied
    # Returning 403 Forbidden if permission is denied
    head 403
  end
end
