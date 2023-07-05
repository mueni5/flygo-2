class FlightsController < ApplicationController
  def index
    @user = User.find(params[:user_id])
    @flights = @user.flights
    render json: @flights
  end 


  def index
    @airport = Airport.find(params[:airport_id])
    @flights = @airport.flights
    render json: @flights
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
