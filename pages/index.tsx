import { FC } from 'react';
import { Button } from '@nextui-org/react';

import { Layout } from '../components/layouts';

const HomePage: FC = () => {
	return (
		<Layout>
			<Button color='gradient'>Hola Mundo</Button>
		</Layout>
	);
};

export default HomePage;
