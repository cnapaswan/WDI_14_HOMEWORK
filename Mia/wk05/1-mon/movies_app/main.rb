require 'httparty'
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'pg'

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
  erb :result_movie_list
end

get '/movie' do
  @movie_input = params[:id]
  conn = PG.connect(dbname: 'movie')
  sql = "SELECT * FROM movies where imdbid='#{@movie_input}';"
  @movies = conn.exec(sql)
  conn.close

  if @movies.count == 0
    @result = HTTParty.get("http://omdbapi.com/?i=#{@movie_input}&apikey=2f6435d9").parsed_response
    @mov_title = @result["Title"]
    @mov_poster = @result["Poster"]
    @mov_release = @result["Released"]
    @mov_genre = @result["Genre"]
    @mov_language = @result["Language"]
    @mov_director = @result["Director"]
    @mov_writer = @result["Writer"]
    @mov_actors = @result["Actors"]
    @mov_story = @result["Plot"]
    @mov_imdbID = @result["imdbID"]

    conn = PG.connect(dbname: 'movie')
    sql = "INSERT INTO movies(
      title, 
      poster, 
      release, 
      genre, 
      language,
      director,
      writer,
      actors,
      plot,
      imdbID
      ) VALUES (
      '#{@mov_title}',
      '#{@mov_poster}',
      '#{@mov_release}',
      '#{@mov_genre}',
      '#{@mov_language}',
      '#{@mov_director}',
      '#{@mov_writer}',
      '#{@mov_actors}', 
      '#{@mov_story}',
      '#{@mov_imdbID}');"

      conn.exec(sql)
      conn.close
  else
    @result = @movies[0]
    @mov_title = @result["title"]
    @mov_poster = @result["poster"]
    @mov_release = @result["released"]
    @mov_genre = @result["genre"]
    @mov_language = @result["language"]
    @mov_director = @result["director"]
    @mov_writer = @result["writer"]
    @mov_actors = @result["actors"]
    @mov_story = @result["plot"]
    @mov_imdbID = @result["imdbid"]
  end

  erb :movie
end

get '/example' do

  @firstPerson = params[:first_person]
  @secondPerson = params[:second_person]
  @thirdPerson = params[:third_person]

  "Hello #{@firstPerson}, #{params[:second_person]} and #{@thirdPerson}"

end




