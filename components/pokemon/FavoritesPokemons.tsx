import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from '.';
import { favorite } from '../../utils/localFavorites';
import { SmallPokemon } from 'Interfaces';

interface Props {
  pokemons: favorite[];
}

export const FavoritesPokemons: FC<Props> = ({ pokemons }) => {
  const [pokemonsList, setPokemonsList] = useState(pokemons);

  const deletePokemonFav = (pokemon: favorite) => {
    const pokemons = JSON.parse(localStorage.getItem('favorites') || '[]');
    const newPokemons = pokemons.filter((poke: SmallPokemon) => poke.name !== pokemon.name);
    setPokemonsList(newPokemons);
    localStorage.setItem('favorites', JSON.stringify(newPokemons));
  };
  return (
    <Grid.Container
      gap={2}
      direction="row"
      justify="flex-start">
      {pokemonsList?.map(pokemon => (
        <FavoriteCardPokemon
          pokemon={pokemon}
          key={pokemon.id}
          deletePokemonFav={deletePokemonFav}
        />
      ))}
    </Grid.Container>
  );
};
