class Api::V1::BaseController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_user!

  def current_user
    @current_user ||= authorize_by_token || authorize_by_session
  end
  helper_method :current_user

  private

  def authorize_user!
    if current_user.blank?
      render(json: { errors: 'Unauthorized' }, status: 401) && return
    end
  end

  def authorize_by_token
    params[:token].present? && User.find_by_token(params[:token])
  end

  def authorize_by_session
    session[:user_id].present? && User.find_by_id(session[:user_id])
  end
end
