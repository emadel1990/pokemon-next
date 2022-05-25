import React from 'react';
import {useRouter} from 'next/router';
import {FC} from 'react';
import {Grid, Card} from '@nextui-org/react';
import {favorite} from '../../utils/localFavorites';

interface Props {
  pokemon: favorite;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemon}) => {
  const router = useRouter();
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemon.name}`);
  };
  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} onClick={onFavoriteClicked}>
      <Card hoverable clickable css={{padding: '10px'}}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          width={'100%'}
          height={'140px'}
        />
      </Card>
    </Grid>
  );
};
