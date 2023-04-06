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
import useCheckRules from './hook/useCheckRules';
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
      rules,
      placeholder,
      getError,
      ...restProps
    } = props;
    const [value, setValue] = useState<string | null>(null);
    const message = useCheckRules({
      field: placeholder,
      rules: rules,
      value,
    });

    useEffect(() => {
      if (isFunction(getError)) {
        getError(message);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [message]);

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
        <InputWrapper {...restProps} error={!!message}>
          <InputComposed
            ref={ref}
            size={size}
            onChangeText={onChange}
            icon={icon}
            placeholder={placeholder}
            error={!!message}
            {...restProps}
          />
          {icon && (
            <IconWrapper onPress={onHandleIcon} size={size}>
              {icon}
            </IconWrapper>
          )}
        </InputWrapper>
        {message && (
          <ErrorMessage variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
            {message}
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
};

Input.propTypes = {
  variant: PropTypes.oneOf(Object.values(INPUT_VARIANT)),
  size: PropTypes.oneOf(Object.values(INPUT_SIZE)),
};

export default Input;
