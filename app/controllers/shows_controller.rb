class ShowsController < ApplicationController

  def index
    @shows = Show.where(genre_id: params[:genre_id])
    render json: @shows, except: [:created_at, :updated_at]
  end

  def update
    @shows.update(tickets_left: @show.tickets_left - 1 )
  end
end
