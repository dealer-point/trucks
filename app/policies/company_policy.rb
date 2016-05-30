class CompanyPolicy < ApplicationPolicy

  def destroy?
    true
  end

  class Scope < Scope
    def resolve
      scope.all
    end
  end
end
