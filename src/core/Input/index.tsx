import React, {
  forwardRef,
  useEffect,
  useState,
} from 'react';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';
import { GestureResponderEvent, TextInput } from 'react-native/types';
import { INPUT_SIZE, INPUT_VARIANT } from '../../constants/theme/input';
import {
  ErrorMessage,
  IconWrapper,
  InputComposed,
  InputContainer,
  InputWrapper,
} from './index.style';
import { InputProps } from './index.types';
import { isEqual } from 'lodash';
import { TYPOGRAPHY_VARIANT } from '../../constants/theme/typography';

const Input = forwardRef<TextInput, InputProps>(
  (props, ref) => {
    const {
      size,
      icon,
      onPressIcon,
      onChangeText,
      value: valueProps,
      style,
      placeholder,
      error,
      errorMessage,
      styleInput,
      ...restProps
    } = props;
    const [value, setValue] = useState<string | null>(null);

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
      <InputContainer style={style}>
        <InputWrapper {...restProps} error={!!errorMessage || error}>
          <InputComposed
            ref={ref}
            size={size}
            onChangeText={onChange}
            icon={icon}
            placeholder={placeholder}
            error={!!errorMessage || error}
            style={styleInput}
            value={value || ''}
            {...restProps}
          />
          {icon && (
            <IconWrapper onPress={onHandleIcon} size={size}>
              {icon}
            </IconWrapper>
          )}
        </InputWrapper>
        {errorMessage && (
          <ErrorMessage variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
            {errorMessage}
          </ErrorMessage>
        )}
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';

Input.defaultProps = {
  variant: INPUT_VARIANT.STROKE,
  size: INPUT_SIZE.md,
  autoCapitalize: 'none',
  styleInput: {},
};

Input.propTypes = {
  variant: PropTypes.oneOf(Object.values(INPUT_VARIANT)),
  size: PropTypes.oneOf(Object.values(INPUT_SIZE)),
};

export default Input;
