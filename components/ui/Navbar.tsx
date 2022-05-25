import {Spacer, Text, useTheme, Link} from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
  const {theme} = useTheme();
  const idPokemon = (Math.random() * 151).toFixed(0);
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 30px',
        backgroundColor: theme?.colors.accents1.value
      }}
    >
      <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`}
          alt="icono de la app"
          width={85}
          height={85}
        />
        <Text color="white" h2>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
        <Spacer css={{flex: 1}} />
      </Link>
      <Link href="/favorites">
        <Text h3>Favorites</Text>
      </Link>
    </div>
  );
};
