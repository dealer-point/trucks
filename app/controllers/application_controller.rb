class ApplicationController < ActionController::Base
  include Pundit
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception

  # Globally rescue Authorization Errors in controller.
  rescue_from Pundit::NotAuthorizedError, with: :not_authorized
  # Enforces access right checks for individuals resources
  after_action :verify_authorized, except: :index
  # Enforces access right checks for collections
  # after_action :verify_policy_scoped, only: :index

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

  def not_authorized
    policy_name = exception.policy.class.to_s.underscore
    error_message = t("#{policy_name}.#{exception.query}", scope: 'pundit.messages', default: :default)
    respond_to do |format|
      format.html do
        flash[:error] = error_message
        redirect_to request.referrer || root_path
      end
      format.json { render json: { error: error_message }, status: :forbidden }
    end
  end
end
