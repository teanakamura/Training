class UsersController < ApplicationController
  def index
    @user = User.new
  end

  def login
    @user = User.new
  end

  def send_to_api_with_get
    @user = User.new
    # root = 'http://127.0.0.1:8080'
    # root = 'http://localhost:8080'
    # url = "#{root}/api/user\?email=#{params[:email]}&password=#{params[:password]}"
    root = url_for([:api, only_path: false])
    url = "#{root}/user\?email=#{params[:email]}&password=#{params[:password]}"
    puts url
    cmd = "curl #{url}"
    json = %x(#{cmd})
    @user.name = json
    render :action => "login"
  end

  def send_to_api_with_post
    @user = User.new
    # root = 'http://127.0.0.1:8080'
    # root = 'http://localhost:8080'
    # url = "#{root}/api/user\?email=#{params[:email]}&password=#{params[:password]}"
    root = url_for([:api, only_path: false])
    url = "#{root}/user"
    cmd = "curl #{url} --data-urlencode \'email_adress=#{params[:user][:email]}\' --data-urlencode \'password=#{params[:user][:password]}\' -XPOST"
    puts cmd
    json = %x(#{cmd})
    puts json
    @user.name = json
    render :action => "login"
  end
end
