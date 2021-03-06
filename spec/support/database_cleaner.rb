# DatabaseCleaner configuration
RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
  config.before(:suite) do
    # Clean all tables to start
    DatabaseCleaner.clean_with :truncation
    # Use transactions for tests
    DatabaseCleaner.strategy = :transaction
    # Truncating doesn't drop schemas, ensure we're clean here, app *may not* exist
    begin
      Apartment::Tenant.drop('app')
    rescue
      nil
    end
    # Create the default tenant for our tests
    Dealer.create!(subdomain: 'app', title: 'App Dealer')
  end

  config.before(:each) do
    # Start transaction for this test
    DatabaseCleaner.start
    # Switch into the default tenant
    Apartment::Tenant.switch! 'app'
  end

  config.after(:each) do
    # Reset tenant back to `public`
    Apartment::Tenant.reset
    # Rollback transaction
    DatabaseCleaner.clean
  end
end
