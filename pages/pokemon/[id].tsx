import {FC, useEffect, useState} from 'react';
import {GetStaticProps, GetStaticPaths} from 'next';

import {Layout} from '../../components/layouts';
import {pokeApi} from '../../api';
import {Pokemon} from '../../Interfaces';
import {localFavorites} from '../../utils';

import {Grid, Card, Text, Button, Container, Image} from '@nextui-org/react';
import confetti from 'canvas-confetti';

interface Props {
  pokemon: Pokemon;
}

const PokemonPageById: FC<Props> = ({pokemon}) => {
  const [isFavorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    setFavorite(localFavorites.existInFavorites(pokemon.id));
  }, [pokemon.id]);

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
          <Grid xs={12} sm={4}>
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
          <Grid xs={12} sm={8}>
            <Card>
              <Card.Header
                css={{
                  padding: '0px 10px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap'
                }}
              >
                <Text
                  h1
                  transform="capitalize"
                  css={{
                    textGradient: '45deg, $blue600 -20%, $pink600 50%'
                  }}
                  weight="bold"
                >
                  {pokemon.name}
                </Text>
                <Button
                  shadow={!isFavorite}
                  bordered={isFavorite}
                  color={!isFavorite ? 'gradient' : 'error'}
                  onClick={saveOnLocalStorage}
                >
                  {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                </Button>
              </Card.Header>
              <Card.Body>
                <Text
                  size={30}
                  css={{
                    textGradient: '45deg, $yellow600 -20%, $red600 100%'
                  }}
                  weight="bold"
                >
                  Sprites:
                </Text>
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
  const pokemon151 = [...Array(151)].map((value, index) => `${index + 1}`);
  return {
    paths: pokemon151.map(id => ({params: {id}})),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {id} = params as {id: string};

  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites
  };

  return {
    props: {
      pokemon
    }
  };
};

export default PokemonPageById;
