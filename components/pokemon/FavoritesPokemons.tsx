import {FC} from 'react';
import {useRouter} from 'next/router';
import {Grid} from '@nextui-org/react';
import {FavoriteCardPokemon} from '.';
import {favorite} from '../../utils/localFavorites';

interface Props {
  pokemons: favorite[];
}

export const FavoritesPokemons: FC<Props> = ({pokemons}) => {
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {pokemons?.map(pokemon => (
        <FavoriteCardPokemon pokemon={pokemon} key={pokemon.id} />
      ))}
    </Grid.Container>
  );
};
