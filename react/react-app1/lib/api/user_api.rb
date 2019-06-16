require_relative './user_api_entity'

class UserAPI < Grape::API
  resource "user" do  # 名前空間
    desc  "ddd"
    # http://localhost:8080/api/user
    get do
      "ddd"
    end

    desc "check user"
    # http://localhost:8080/api/user/
    params do
      with(type: String) do
        requires :email_adress, as: :email
        requires :password
      end
    end
    post do
      # User.find_by(email: params[:email], password: params[:password])
      present User.find_by(email: params[:email], password: params[:password]), with: Entity::UserApiEntity
    end
  end
end
