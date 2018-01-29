class PagesController < ApplicationController
  def new
  end

  def home
    @projects = Project.all
  end
end
