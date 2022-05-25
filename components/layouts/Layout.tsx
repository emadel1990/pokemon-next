import { FC, ReactNode } from 'react';

import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
	children?: ReactNode;
	title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Pokemon App'}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content='Informacion sobre el pokemon XXXX' />
				<meta name='keywords' content='XXXX, pokemon, pokedex' />
				<meta name='author' content='Emanuel Delgado' />
			</Head>

			<Navbar />

			<main
				style={{
					padding: '0px 20px',
				}}
			>
				{children}
			</main>
		</>
	);
};
