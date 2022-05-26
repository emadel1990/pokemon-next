import {FC, ReactNode} from 'react';

import Head from 'next/head';
import {Navbar} from '../ui';

interface Props {
  children?: ReactNode;
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Informacion sobre el pokemon XXXX" />
        <meta name="keywords" content="XXXX, pokemon, pokedex" />
        <meta name="author" content="Emanuel Delgado" />
        <link rel="shourtcut icon" href="/master-ball.png"></link>

        <meta property="og:title" content={`Info about ${title}`} />
        <meta property="og:description" content={`Pokemon Web App`} />
        <meta property="og:image" content={`${origin}/ogBackground.jpg`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>
    </>
  );
};
