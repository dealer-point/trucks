class Api::V1::BaseController < ApplicationController
  protect_from_forgery with: :null_session
  before_action :authorize_user!

  def current_user
    # Token auth
    @current_user ||= request.params[:token].present? && User.find_by_token(request.params[:token])
  end
  helper_method :current_user

  private

  def authorize_user!
    if current_user.blank?
      render(json: { errors: 'Unauthorized' }, status: 401) && return
    end
  end
end
