class PokemonsController < ApplicationController

  def index
    @pokemons = Pokemon.all
  end


  def new
  end

  def api_create
    pokemon = Pokemon.new
    pokemon.species = params[:species]
    pokemon.nickname = params[:nickname]
    pokemon.level = params[:level]
    pokemon.imgurl = params[:imgurl]
    if pokemon.save
      #render json: pokemon
      redirect_to '/pokemons'
    else
      raise "booyah!"
    end

  end

  def play
  end

  def api_all
    @pokemons = Pokemon.all
    render json: @pokemons
    
  end


end
