class ReviewsController < ApplicationController
  # app/controllers/reviews_controller.rb
  def index
    @user = User.find(params[:user_id])
    @reviews = @user.reviews
    render json: @reviews
  end

    

  def show
  end

  def destroy
  end

  def create
  end

  def update
  end
end
