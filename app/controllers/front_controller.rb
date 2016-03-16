class FrontController < ApplicationController
  before_action :authorize_user!

  def index
  end

  private

  def authorize_user!
    redirect_to new_sessions_path unless current_user.present?
  end
end
