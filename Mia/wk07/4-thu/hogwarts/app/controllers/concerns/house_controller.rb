class HouseController < ApplicationController

  def show
    @houses = House.find(params[:id])
    @students = Student.where(house_id: params[:id])
  end

end

