# Set your full path to application.
app_dir = File.expand_path('../../', __FILE__)
shared_dir = File.expand_path('../../../shared/', __FILE__)

# Set unicorn options
worker_processes 2
listen 8080, :tcp_nopush => true
timeout 30

# Fill path to your app
working_directory app_dir

# Set up socket location
listen "#{shared_dir}/tmp/sockets/unicorn.sock", :backlog => 64

# Loging
stderr_path "#{shared_dir}/log/unicorn.stderr.log"
stdout_path "#{shared_dir}/log/unicorn.stdout.log"

# Set master PID location
pid "#{shared_dir}/tmp/pids/unicorn.pid"

preload_app true
GC.respond_to?(:copy_on_write_friendly=) and
  GC.copy_on_write_friendly = true

check_client_connection false

# local variable to guard against running a hook multiple times
run_once = true

before_fork do |server, worker|

  defined?(ActiveRecord::Base) and
    ActiveRecord::Base.connection.disconnect!

  if run_once
    # do_something_once_here ...
    run_once = false # prevent from firing again
  end

end

after_fork do |server, worker|
  defined?(ActiveRecord::Base) and ActiveRecord::Base.establish_connection
end
