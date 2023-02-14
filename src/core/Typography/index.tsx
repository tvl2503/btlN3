import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native/types';
import { TypographyComposed } from './index.style';
import { TypographyProps } from './index.types';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';

const Typography = forwardRef<Text, TypographyProps>((props, ref) => {
  return <TypographyComposed ref={ref} {...props} />;
});

Typography.defaultProps = {
  variant: TYPOGRAPHY_VARIANT.BODY,
};

Typography.propTypes = {
  variant: PropTypes.oneOf(Object.values(TYPOGRAPHY_VARIANT)),
};

export default Typography;
