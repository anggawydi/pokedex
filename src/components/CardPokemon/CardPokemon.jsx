import React from 'react';
import styled from '@emotion/styled';

import { colors, unit, mq } from '../../styles';
import PokemonType from '../PokemonType';
import Button from '../Button';

const CardPokemon = React.forwardRef(
  ({ data, myPokemon, owned, actionRelease, ...props }, ref) => {
    return (
      <CardContainer ref={ref}>
        <CardContent {...props} data-testid="card-poke">
          <CardImage
            src={!myPokemon ? data.image : data.sprites.front_default}
          />
          <CardBodyContainer>
            <HalfCircle>
              <WhiteSpace />
            </HalfCircle>
            <CardBody>
              {!myPokemon && <CardTag>#{data.id}</CardTag>}
              <Title>{!myPokemon ? data.name : data.nickname}</Title>
              {!myPokemon && <Owned>Owned {owned}</Owned>}
              {myPokemon && (
                <Flex>
                  {data.types.map(({ type }) => (
                    <PokemonType key={type.name} type={type.name} halfPadding />
                  ))}
                </Flex>
              )}
            </CardBody>
          </CardBodyContainer>
        </CardContent>
        {myPokemon && (
          <ButtonContainer>
            <Button secondary onClick={actionRelease}>
              Release
            </Button>
          </ButtonContainer>
        )}
      </CardContainer>
    );
  }
);

export default CardPokemon;

const CardContainer = styled.div({
  padding: 10,
  [mq[0]]: {
    width: '50%',
  },
  [mq[1]]: {
    width: '33.3%',
  },
  [mq[2]]: {
    width: '20%',
  },
  width: '50%',
});

const CardContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
});

const CardImage = styled.img({
  width: '100%',
  height: 'auto',
  aspectRatio: '1/1',
  objectFit: 'cover',
  position: 'absolute',
});

const CardBodyContainer = styled.div({
  marginTop: '30%',
  width: '100%',
});

const HalfCircle = styled.div({
  width: '100%',
  height: 'auto',
  aspectRatio: '2/1',
  borderTopLeftRadius: '150px',
  borderTopRightRadius: '150px',
  backgroundColor: '#fff',
  position: 'relative',
  zIndex: -1,
});

const WhiteSpace = styled.div({
  height: '10px',
  width: '100%',
  backgroundColor: '#fff',
  position: 'absolute',
  bottom: -5,
});

const CardBody = styled.div({
  padding: `${unit * 2}px`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  borderBottomLeftRadius: 6,
  borderBottomRightRadius: 6,
  boxShadow:
    'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
  backgroundColor: '#fff',
  position: 'relative',
  zIndex: -2,
});

const CardTag = styled.p({
  color: colors.grey.light,
  width: '100%',
  textAlign: 'center',
  fontWeight: 'bold',
  marginBottom: unit / 2,
});

const Title = styled.h3({
  width: '100%',
  textAlign: 'center',
  lineHeight: '28px',
  textTransform: 'capitalize',
  fontSize: '20px',
  [mq[0]]: {
    fontSize: '25px',
  },
});

const Owned = styled.p({
  marginTop: unit,
});

const Flex = styled.div({
  display: 'flex',
  marginTop: unit * 1.5,
});

const ButtonContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});
