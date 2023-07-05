class AirportsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    airports = Airport.all
    render json: airports
  end

  def show
    airport = Airport.find(params[:id])
    render json: airport
  end

  def create
    airport = Airport.new(airport_params)
    if airport.save
      render json: airport, status: :created
    else
      render json: { error: airport.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    airport = Airport.find(params[:id])
    if airport.update(airport_params)
      render json: airport
    else
      render json: { error: airport.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def destroy
    airport = Airport.find(params[:id])
    airport.destroy
    head :no_content
  end


  private
  def airport_params
    params.require(:airport).permit(:name, :location)
  end

  def render_not_found_response
    render json: { error: "Airport not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { error: invalid.record.full_messages }, status: :unprocessable_entity
  end

end
