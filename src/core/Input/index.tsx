import React, { forwardRef, useEffect, useState } from 'react';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';
import {
  GestureResponderEvent,
  TextInput,
} from 'react-native/types';
import { INPUT_SIZE, INPUT_VARIANT } from '../../constants/theme/input';
import { IconWrapper, InputComposed, InputWrapper } from './index.style';
import { InputProps } from './index.types';
import { isEqual } from 'lodash';

const Input = forwardRef<TextInput, InputProps>((props, ref) => {
  const { size, icon, onPressIcon, onChangeText, value: valueProps, style, ...restProps } = props;
  const [value, setValue] = useState('');

  useEffect(() => {
    const valuePProps = valueProps ?? -1;
    if (valuePProps === -1) {
      return;
    }
    if (!isEqual(valueProps, value)) {
      setValue(valueProps!);
    }
  }, [valueProps, value]);

  const onHandleIcon = (event: GestureResponderEvent) => {
    if (isFunction(onPressIcon)) {
      onPressIcon(event);
    }
  };

  const onChange = (v: string) => {
    setValue(v);
    if (isFunction(onChangeText)) {
      onChangeText(v);
    }
  };
  return (
    <InputWrapper {...restProps} style={style}>
      <InputComposed
        ref={ref}
        size={size}
        onChangeText={onChange}
        icon={icon}
        {...restProps}
      />
      {icon && (
        <IconWrapper onPress={onHandleIcon} size={size}>
          {icon}
        </IconWrapper>
      )}
    </InputWrapper>
  );
});

Input.displayName = 'Input';

Input.defaultProps = {
  variant: INPUT_VARIANT.STROKE,
  size: INPUT_SIZE.md,
};

Input.propTypes = {
  variant: PropTypes.oneOf(Object.values(INPUT_VARIANT)),
  size: PropTypes.oneOf(Object.values(INPUT_SIZE)),
};

export default Input;
