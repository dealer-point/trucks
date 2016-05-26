class FrontController < ApplicationController

  layout false
  before_action :authorize_user!

  def index
    # skip_policy_scope
    render file: './public/_index.html', layout: false
  end

  private

  def authorize_user!
    redirect_to new_sessions_path unless current_user.present?
  end
end
