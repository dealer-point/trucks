class UserPolicy < ApplicationPolicy
  def current?
    @user.id.eql? @record.id
  end

  class Scope < Scope
    def resolve
      scope
    end
  end
end
