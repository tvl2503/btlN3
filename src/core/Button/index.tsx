import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonProps, BUTTON_SIZE } from './index.types';
import { TextButtonComposed, TouchableOpacityComposed } from './index.style';
import { BUTTON_VARIANT } from '../../constants/theme/button';
import { TouchableOpacity } from 'react-native/types';

const Button = forwardRef<TouchableOpacity, ButtonProps>((props, ref) => {
  const { children, size, as, variant, ...restProps } = props;
  return (
    <TouchableOpacityComposed variant={variant} ref={ref} size={size} {...restProps}>
      <TextButtonComposed variant={variant} as={as}>{children}</TextButtonComposed>
    </TouchableOpacityComposed>
  );
});

Button.displayName = 'Button';

Button.defaultProps = {
  size: BUTTON_SIZE.md,
  variant: BUTTON_VARIANT.primary,
};

Button.propTypes = {
  size: PropTypes.oneOf(Object.values(BUTTON_SIZE)),
};

export default Button;
