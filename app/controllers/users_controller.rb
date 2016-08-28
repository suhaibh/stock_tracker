class UsersController < ApplicationController
  def my_portfolio
  	@user = current_user
  	@user_stocks = current_user.user_stocks
  end

  def my_friends
  	@friends = current_user.friends
  end

  def add_friend
  	@friend = User.find(params[:friend])
  	current_user.friendships.build(friend_id: @friend.id)

  	if current_user.save
  		redirect_to my_friends_path, notice: "Friend was successfully added"
  	else
  		redirect_to my_friends_path
  		flash[:error] = "Error, could not add friend"
  	end
  end

  def search_friends
  	@users = User.search(params[:search_param])
  	
  	if @users
  		@users = current_user.except_current_user(@users)
  		render partial: "friends/lookup"
  	else
  		render status: :not_found, nothing: :true
  	end
  end

  def show
  	@user = User.find(params[:id])
  	@friends = @user.friends
  end

end
