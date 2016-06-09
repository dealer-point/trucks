class Api::V1::BaseController < ApplicationController
  # protect_from_forgery with: :null_session
  before_action :authorize_user!
  include Pundit

  # Globally rescue Authorization Errors in controller.
  rescue_from Pundit::NotAuthorizedError, with: :not_authorized
  # Enforces access right checks for individuals resources
  after_action :verify_authorized, except: :index
  # Enforces access right checks for collections
  after_action :verify_policy_scoped, only: :index

  def render_api args
    render json: { data: args[:json], meta: args[:meta] }, root: false, status: args[:status]
  end

  def meta_attributes(resource, extra_meta = {})
    {
      current_page: resource.current_page,
      total_pages: resource.total_pages,
      total_count: resource.total_count
    }.merge(extra_meta)
  end

  private

  def authorize_user!
    if current_user.blank?
      render(json: { errors: 'Unauthorized' }, status: 401) && return
    end
  end

  def not_authorized(exception)
    policy_name = exception.policy.class.to_s.underscore
    error_message = t("#{policy_name}.#{exception.query}", scope: 'pundit.messages', default: :default)
    render json: { error: error_message, activities: current_user.activities }, status: :forbidden
  end
end
