class ApplicationPolicy
  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def user_activities
    @user.activities
  end

  def inferred_activity(method)
    "#{@record.class.name.downcase}:#{method}"
  end

  def method_missing(name, *args)
    if name.to_s.last == '?'
      user_activities.include?(inferred_activity(name.to_s.delete('?')))
    else
      super
    end
  end

  def scope
    Pundit.policy_scope!(user, record.class)
  end

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope
    end
  end
end
