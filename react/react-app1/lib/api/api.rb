class API < Grape::API
  #prefix "api"
  format :json
  mount UserAPI
end
