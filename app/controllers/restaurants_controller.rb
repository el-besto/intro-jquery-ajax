class RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all

    respond_to do |format|
      format.html
      format.json { render json: @restaurants }
    end
  end

  def new
    @restaurant = Restaurant.new
  end

  def create
    @restaurant = Restaurant.create(params.require(:restaurant).permit(:name))

    respond_to do |format|
      # note how for HTML req we still want to redirect
      format.html { redirect_to restaurants_path }
      # we send back the new restraurant as json
      format.json { render json: @restaurant }
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
