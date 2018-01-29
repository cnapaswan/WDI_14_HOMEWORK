class CommentsController < ApplicationController
  def create
   comment = Comment.new
   comment.body = params[:body]
   comment.user_id = params[:user_id]
   comment.project_id = params[:project_id]
   if comment.save
    redirect_to "/projects/#{params[:project_id]}"
    else
      redirect_to '/'
    end

  end
end
