class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def post
    student = Student.new
    student.name = params[:name]
    student.img_url = params[:image]
    student.house_id = rand(5..8)
    if student.save
      redirect_to '/students'
    end
  end

end
