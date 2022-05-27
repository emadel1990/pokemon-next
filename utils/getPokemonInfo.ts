import { pokeApi } from 'api';
import { Pokemon } from 'Interfaces';

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const pokemon = nameOrId.toLowerCase();
    const { data } = await pokeApi.get<Pokemon>(`pokemon/${pokemon}`);
    return {
      id: data?.id,
      name: data?.name,
      sprites: data?.sprites,
      stats: data?.stats
    };
  } catch (error) {
    return null;
  }
};
