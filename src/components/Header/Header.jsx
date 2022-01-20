import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { colors, widths, mq } from '../../styles';
import logo from '../../assets/images/logo192.png';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderBar>
      <Container>
        <HomeButtonContainer>
          <SpaceBetween>
            <HomeButton onClick={() => navigate('/')}>
              <LogoContainer>
                <Logo src={logo} alt="logo" />
              </LogoContainer>
              <Title>
                <h3>PokeDex</h3>
                <p>Games Pokemon</p>
              </Title>
            </HomeButton>
            <ButtonMyPokemon onClick={() => navigate('/my-pokemon-list')}>
              MyPokemon
            </ButtonMyPokemon>
          </SpaceBetween>
        </HomeButtonContainer>
      </Container>
    </HeaderBar>
  );
};

export default Header;

/** Header styled compoenents */
const HeaderBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: `solid 1px ${colors.primary}`,
  boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.15)',
  padding: '5px 20px',
  minHeight: 80,
  backgroundColor: 'white',
});

const Container = styled.div({
  width: `${widths.regularPageWidth}px`,
});

const HomeButtonContainer = styled.div({
  display: 'flex',
  flex: 1,
});

const SpaceBetween = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const HomeButton = styled.div({
  display: 'flex',
  color: colors.primary,
  alignItems: 'center',
  ':hover': {
    color: colors.primaryLight,
  },
  cursor: 'pointer',
});

const LogoContainer = styled.div({ display: 'flex', alignSelf: 'center' });

const Logo = styled.img({
  height: 40,
  width: 40,
  marginRight: 8,
  [mq[0]]: {
    width: 60,
    height: 60
  }
});

const Title = styled.div({
  display: 'flex',
  flexDirection: 'column',
  h3: {
    lineHeight: '1em',
    marginBottom: 0,
  },
  div: {
    fontSize: '0.9em',
    lineHeight: '0.8em',
    paddingLeft: 2,
  },
});

const ButtonMyPokemon = styled.div({
  padding: '10px 20px',
  borderRadius: 6,
  border: `solid 1px ${colors.primary}`,
  color: colors.primary,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: colors.background,
  },
});
