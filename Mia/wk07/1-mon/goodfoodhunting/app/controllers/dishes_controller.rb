class DishesController < ApplicationController
  def new
  end

  def index
    @dishes = Dish.all
  end

  def show
    @dish = Dish.find(params[:id])
  end 

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    dish.save
    redirect_to '/dishes'

  end

 
  def update
    @dish = Dish.find(params[:id])
    @dish.name = params[:name]
    @dish.image_url = params[:image_url]
    @dish.save
    
    redirect_to '/dishes/:id'
  end

  def destroy
    @dish = Dish.find(params[:id])
    if @dish.destroy
      redirect_to '/dishes'
    else
      render :show
      #show page depends info from @dish in this destroy block
    end
  end
end
