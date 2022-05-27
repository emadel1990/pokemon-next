import React from 'react';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Grid, Card, Button, Text } from '@nextui-org/react';
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

  return (
    <Grid
      direction="column"
      xs={6}
      sm={3}
      md={2}
      xl={1}
      key={pokemon.id}
      onClick={onFavoriteClicked}>
      <Card
        hoverable
        clickable
        css={{
          padding: '0px',
          margin: '0px',
          display: 'flex'
        }}>
        <Card.Header css={{ display: 'flex', justifyContent: 'end' }}>
          <Button
            style={styles}
            color="error"
            ghost
            onClick={() => deletePokemonFav(pokemon)}>
            X
          </Button>
        </Card.Header>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          width={'100%'}
          height={'140px'}
          css={{ padding: '10px' }}
        />
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
