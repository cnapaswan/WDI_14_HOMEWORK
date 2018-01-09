require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do

erb :index

end

get '/about' do

  erb :about
end

get '/movie_choice' do
  @choice_movie_input = params[:title]
  @choice_result = HTTParty.get("http://omdbapi.com/?s=#{@choice_movie_input}&apikey=2f6435d9").parsed_response
  @list = @choice_result["Search"]
  erb :choice
end

get '/movie' do


  @movie_input = params[:selected_movie]

  @result = HTTParty.get("http://omdbapi.com/?t=#{@movie_input}&apikey=2f6435d9").parsed_response
  @mov_title = @result["Title"]
  @mov_poster = @result["Poster"]
  @mov_release = @result["Released"]
  @mov_genre = @result["Genre"]
  @mov_language = @result["Language"]
  @mov_director = @result["Director"]
  @mov_writer = @result["Writer"]
  @mov_actors = @result["Actors"]
  @mov_story = @result["Plot"]

  


  erb :movie

end

get '/example' do

  @firstPerson = params[:first_person]
  @secondPerson = params[:second_person]
  @thirdPerson = params[:third_person]

  "Hello #{@firstPerson}, #{params[:second_person]} and #{@thirdPerson}"

end




