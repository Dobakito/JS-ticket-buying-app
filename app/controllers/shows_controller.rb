class ShowsController < ApplicationController
  def index
    @shows = Show.where(genre_id: params[:genre_id])
    render json: @shows, except: %i[created_at updated_at]
  end

  def update
    @show = Show.find(params[:id])
    @show.update(tickets_left: @show.tickets_left - 1)
    render json: @show
  end
end
