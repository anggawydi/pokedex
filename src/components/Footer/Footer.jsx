import React from 'react';
import styled from '@emotion/styled';

import { colors } from '../../styles';
import Logo from '../../assets/images/logo192.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src={Logo} alt="logo" />
      2022 © Technical Test Tokopedia (Angga Widianto){' '}
    </FooterContainer>
  );
};

export default Footer;

/** Footer styled components */
const FooterContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.primary,
  padding: 20,
  backgroundColor: 'white',
  borderTop: `solid 1px ${colors.primary}`,
});

const FooterLogo = styled.img({
  width: '50px',
  height: '50px',
  marginBottom: '10px',
});
