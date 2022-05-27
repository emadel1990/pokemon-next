import { FC } from 'react';
import { SmallPokemon } from '../../Interfaces';
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  const { img, name, id } = pokemon;

  const router = useRouter();

  const handleClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      xl={1}
      key={id}>
      <Card
        hoverable
        clickable
        css={{ w: '100%' }}
        onClick={handleClick}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            src={img}
            width="100%"
            height={300}
          />
        </Card.Body>
        <Card.Footer
          blur
          css={{
            bgBlur: '#d66b6b',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1
          }}>
          <Row justify="space-between">
            <Text
              transform="capitalize"
              css={{ color: 'light-grey', fontWeight: '500', letterSpacing: '$wider' }}>
              {name}
            </Text>
            <Text css={{ color: 'light-grey', fontWeight: '500' }}>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
