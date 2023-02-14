import React, { forwardRef, useState } from 'react';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';
import { NativeSyntheticEvent, TextInput, TextInputFocusEventData } from 'react-native/types';
import { INPUT_SIZE, INPUT_VARIANT } from '../../constants/theme/input';
import { InputComposed } from './index.style';
import { InputProps } from './index.types';

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { onFocus, onBlur, ...restProps } = props;
  const [focused, setFocused] = useState(false);
  const onFocusInput = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (isFunction(onFocus)) {
      onFocus(event);
    }
    setFocused(true);
  };

  const onBlurInput = (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (isFunction(onBlur)) {
      onBlur(event);
    }
    setFocused(false);
  };
  return <InputComposed isActive={focused} onBlur={onBlurInput} onFocus={onFocusInput} ref={ref} {...restProps} />;
});

Input.displayName = 'Input';

Input.defaultProps = {
  variant: INPUT_VARIANT.STROKE,
  size: INPUT_SIZE.md,
  isActive: false,
};

Input.propTypes = {
  variant: PropTypes.oneOf(Object.values(INPUT_VARIANT)),
  size: PropTypes.oneOf(Object.values(INPUT_SIZE)),
  isActive: PropTypes.bool,
};

export default Input;
