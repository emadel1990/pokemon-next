import React from 'react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Grid, Card, Button, Text, Progress, Backdrop } from '@nextui-org/react';
import { favorite } from '../../utils/localFavorites';

interface Props {
  pokemon: favorite;
  deletePokemonFav: (pokemon: favorite) => void;
}

const styles: React.CSSProperties = {
  maxWidth: '40px',
  minWidth: '40px',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  alignSelf: 'end',
  margin: '0',
  padding: '0'
};

export const FavoriteCardPokemon: FC<Props> = ({ pokemon, deletePokemonFav }) => {
  const router = useRouter();

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };

  console.log(pokemon.stats);

  return (
    <Grid
      direction="column"
      xs={12}
      sm={6}
      md={4}
      xl={2}
      key={pokemon.id}
      onClick={onFavoriteClicked}>
      <Card
        hoverable
        clickable
        css={{ w: '100%', p: 0 }}>
        <Card.Header
          css={{
            position: 'absolute',
            zIndex: 1,
            top: 5,
            display: 'flex',
            justifyContent: 'end'
          }}>
          <Button
            style={styles}
            color="error"
            ghost
            onClick={() => deletePokemonFav(pokemon)}>
            X
          </Button>
        </Card.Header>
        <Card.Body css={{ overflow: 'hidden', top: 30 }}>
          <Card.Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width="100%"
            height={350}
            alt={pokemon.name}
            css={{ margin: '0px 0px 0px 0px' }}
          />
          <Grid.Container
            xs={8}
            sm={8}
            md={8}
            xl={12}
            direction="column"
            css={{
              position: 'relative',
              display: 'flex',
              width: '90%',
              flexDirection: 'column',
              bottom: -50,
              alignSelf: 'center',
              zIndex: 1
            }}>
            <Grid.Container
              justify="space-between"
              css={{ padding: '10px 0' }}>
              <Text
                weight={'bold'}
                transform={'uppercase'}>
                {pokemon.stats[0].stat.name}
              </Text>
              <Text
                weight={'bold'}
                transform={'uppercase'}>
                {pokemon.stats[0].base_stat}
              </Text>
            </Grid.Container>
            <Progress
              shadow
              color="error"
              status="error"
              value={pokemon.stats[0].base_stat}
            />
            <Grid.Container
              justify="space-between"
              css={{ padding: '10px 0' }}>
              <Text
                weight={'bold'}
                transform={'uppercase'}>
                {pokemon.stats[1].stat.name}
              </Text>
              <Text
                weight={'bold'}
                transform={'uppercase'}>
                {pokemon.stats[1].base_stat}
              </Text>
            </Grid.Container>
            <Progress
              shadow
              color="warning"
              status="warning"
              value={pokemon.stats[1].base_stat}
            />
            <Grid.Container
              justify="space-between"
              css={{ padding: '10px 0' }}>
              <Text
                weight={'bold'}
                transform={'uppercase'}>
                {pokemon.stats[2].stat.name}
              </Text>
              <Text
                weight={'bold'}
                transform={'uppercase'}>
                {pokemon.stats[2].base_stat}
              </Text>
            </Grid.Container>
            <Progress
              shadow
              color="secondary"
              status="secondary"
              value={pokemon.stats[2].base_stat}
            />
          </Grid.Container>
        </Card.Body>
        <Card.Footer>
          <Text
            h2
            transform="capitalize"
            weight={'bold'}
            css={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              textGradient: '45deg, $purple600 -20%, $pink600 100%'
            }}>
            {pokemon.name}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
