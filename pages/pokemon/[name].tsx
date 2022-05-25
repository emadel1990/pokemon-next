import {FC, useState} from 'react';
import {GetStaticProps, GetStaticPaths} from 'next';

import {Layout} from '../../components/layouts';
import {pokeApi} from '../../api';
import {Pokemon, PokemonListResponse} from '../../Interfaces';
import {localFavorites} from '../../utils';

import {Grid, Card, Text, Button, Container, Image} from '@nextui-org/react';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: FC<Props> = ({pokemon}) => {
  const [isFavorite, setFavorite] = useState<boolean>(localFavorites.existInFavorites(pokemon.id));
  const saveOnLocalStorage = () => {
    localFavorites.toggleFavorite(pokemon.id, pokemon.name);
    setFavorite(!isFavorite);
    if (!isFavorite) {
      confetti({
        zIndex: 999,
        particleCount: 300,
        spread: 260,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      });
    }
  };
  return (
    <>
      <Layout title={pokemon.name}>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
          <Grid xs={12} sm={4} key={pokemon.id}>
            <Card hoverable css={{padding: '30px'}}>
              <Card.Body css={{p: 1}}>
                <Card.Image
                  src={pokemon.sprites.other?.dream_world.front_default || 'no-image'}
                  alt={pokemon.name}
                  width="100%"
                  height={200}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={8} key={pokemon.id + 1}>
            <Card>
              <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                <Text h1 transform="capitalize">
                  {pokemon.name}
                </Text>
                <Button color={'gradient'} ghost={!isFavorite} onClick={saveOnLocalStorage}>
                  {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text size={30}>Sprites:</Text>
                <Container direction="row" display="flex" gap={2}>
                  <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    width={120}
                    height={120}
                  />
                  <Image
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                    width={120}
                    height={120}
                  />
                  <Image
                    src={pokemon.sprites.front_shiny}
                    alt={pokemon.name}
                    width={120}
                    height={120}
                  />
                  <Image
                    src={pokemon.sprites.back_shiny}
                    alt={pokemon.name}
                    width={120}
                    height={120}
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async ctx => {
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  return {
    paths: data.results.map(poke => ({
      params: {name: poke.name}
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {name} = params as {name: string};

  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  return {
    props: {
      pokemon: data
    }
  };
};

export default PokemonPage;
