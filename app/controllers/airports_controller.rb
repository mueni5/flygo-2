class AirportsController < ApplicationController
  
  def index
    airports = Airport.all
    render json: airports, status: :ok
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
