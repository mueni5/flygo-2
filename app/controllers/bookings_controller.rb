class BookingsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
  def create
    booking = Booking.new(booking_params)
    if booking.save
      render json: booking, status: :created
    else
      render json: { error: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    booking = Booking.find(params[:id])
    if booking.update(booking_params)
      render json: booking
    else
      render json: { error: booking.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    booking = Booking.find(params[:id])
    booking.destroy
    head :no_content
  end

  private

  def booking_params
    params.require(:booking).permit(:user_id, :flight_id, :status)
  end

  def render_not_found_response
    render json: { error: "Booking not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(invalid)
    render json: { error: invalid.record.full_messages }, status: :unprocessable_entity
  end

end