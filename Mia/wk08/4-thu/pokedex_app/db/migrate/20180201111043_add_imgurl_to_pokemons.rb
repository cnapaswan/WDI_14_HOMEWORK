class AddImgurlToPokemons < ActiveRecord::Migration[5.1]
  def change
    add_column :pokemons, :imgurl, :text
  end
end
