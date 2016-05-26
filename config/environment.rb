# Load the Rails application.
require File.expand_path('../application', __FILE__)

# Initialize the Rails application.
Rails.application.initialize!

Date::DATE_FORMATS[:default] = '%d.%m.%Y'
Time::DATE_FORMATS[:default] = '%d.%m.%Y %H:%M'

class ActiveSupport::TimeWithZone
  def as_json(options = {})
    strftime(Time::DATE_FORMATS[:default])
  end
end

class Date
  def as_json(options = nil) #:nodoc:
    strftime(Date::DATE_FORMATS[:default])
  end
end
