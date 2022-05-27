import { Stat } from 'Interfaces';
export interface favorite {
  id: number;
  name: string;
  stats: Stat[];
}

const toggleFavorite = (id: number, name: string, stats: Stat[]) => {
  let favorites: favorite[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.some(favorite => favorite.id === id)) {
    favorites = favorites.filter(pokeId => pokeId.id !== id);
  } else {
    favorites.push({ id, name, stats });
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }

  const favorites: favorite[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (favorites.some(favorite => favorite.id === id)) {
    return true;
  } else {
    return false;
  }
};

const pokemons = (): favorite[] => {
  const favorites: favorite[] = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites;
};

export default { toggleFavorite, existInFavorites, pokemons };
