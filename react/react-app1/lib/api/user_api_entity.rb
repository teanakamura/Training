module  Entity
  class UserApiEntity < Grape::Entity
    expose :name, :email, :password
  end
end
