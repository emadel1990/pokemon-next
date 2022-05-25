import {memo} from 'react';
import {Spacer, Text, useTheme, Link} from '@nextui-org/react';
import Image from 'next/image';
import {useRouter} from 'next/router';

const Navbar = memo(() => {
  const {theme} = useTheme();
  const pathname = useRouter().pathname;
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
        <Text h2 color={pathname === '/' ? theme?.colors.red600.value : 'white'}>
          P
        </Text>
        <Text color="white" h3>
          okémon
        </Text>
        <Spacer css={{flex: 1}} />
      </Link>
      <Link href="/favorites">
        <Text h3 color={pathname === '/favorites' ? theme?.colors.gradient.value : 'white'}>
          Favorites
        </Text>
      </Link>
    </div>
  );
});

Navbar.displayName = 'Navbar';

export {Navbar};
