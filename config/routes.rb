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
  end

  # Административные маршруты
  # resources :dealers
end
