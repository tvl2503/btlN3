import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { LinkProps } from '../../../../core/Link';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import {
  Container,
  Description,
  Line,
  LinkAction,
  LogoWrapper,
  RowTitle,
  RowWrapper,
  Title,
} from './index.style';
import { ViewProps } from 'react-native/types';
import { NAVIGATION } from '../../../../constants/navigation';

interface HeaderProps extends ViewProps {
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  configAction?: LinkProps;
  screen?: NAVIGATION;
};

const Header: FC<HeaderProps> = props => {
  const { title, description, action, screen ,...rest } = props;
  return (
    <Container {...rest}>
      <RowWrapper>
        <LogoWrapper />
      </RowWrapper>
      <Title variant={TYPOGRAPHY_VARIANT.HEADING_2}>{title}</Title>
      <Line />
      <RowTitle>
        <Description variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
          {description}
        </Description>
        <LinkAction variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR} screen={screen}>{action}</LinkAction>
      </RowTitle>
    </Container>
  );
};

Header.defaultProps = {
  configAction: {},
};

Header.propTypes = {
  configAction: PropTypes.object,
};

export default Header;
