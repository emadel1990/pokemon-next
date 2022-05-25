import { Container, Image, Text } from '@nextui-org/react';

export const NoFavorites = () => {
	return (
		<Container
			css={{
				display: 'flex',
				flexDirection: 'column',
				height: 'calc(100vh - 100px)',
				alignItems: 'center',
				justifyContent: 'center',
				alignSelf: 'center',
			}}
		>
			<Text h1>No favorites found</Text>
			<Image
				src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg'
				alt='poke-image'
				width={350}
				height={350}
				css={{ opacity: 0.5 }}
			></Image>
		</Container>
	);
};
