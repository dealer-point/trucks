class SubdomainConstraint
  def self.matches?(request)
    subdomains = %{ www admin }
    request.subdomain.present? && subdomains.exclude?(request.subdomain)
  end
end

Rails.application.routes.draw do
  # Все маршруты приложения должны быть записаны в блок 'constraints'
  # за исключением административных маршрутов
  constraints SubdomainConstraint do
    # Serve websocket cable requests in-process
    # mount ActionCable.server => '/cable'
    root 'front#index'
    resource :sessions, only: [:new, :create] do
      get :logout, on: :collection
    end

    namespace :api do
      namespace :v1 do
        resources :users, only: [:index, :show, :create, :update, :destroy] do
          get :current, on: :collection
        end
        resources :companies
        resources :events, only: [:index, :create]
      end
    end
  end

  # Административные маршруты
  # resources :dealers
end
