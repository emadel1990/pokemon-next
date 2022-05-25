import {Card, Grid} from '@nextui-org/react';
import {FC, useEffect, useState} from 'react';
import {Layout} from '../../components/layouts';

import {NoFavorites} from '../../components/ui/NoFavorites';
import {FavoritesPokemons} from '../../components/pokemon';
import {localFavorites} from '../../utils';
import {favorite} from '../../utils/localFavorites';

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<favorite[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Pokemons - Favorites">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
