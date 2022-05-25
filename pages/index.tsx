import {FC, memo} from 'react';
import {GetStaticProps} from 'next';
import {Grid} from '@nextui-org/react';

import {pokeApi} from '../api';

import {Layout} from '../components/layouts';
import {PokemonListResponse, SmallPokemon} from '../Interfaces';
import {PokemonCard} from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: FC<Props> = ({pokemons}) => {
  return (
    <Layout title="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ctx => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, index) => ({
    ...poke,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`
  }));

  return {
    props: {
      pokemons
    }
  };
};

export default HomePage;
