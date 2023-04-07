import { isFunction } from 'lodash';
import React, { forwardRef, useEffect, useState } from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputEndEditingEventData,
} from 'react-native/types';
import Input from '../../Input';
import useCheckRules from '../../Input/hook/useCheckRules';
import { InputProps, Rule } from '../../Input/index.types';
import { useFormInstance } from '../FormInstance';

interface FormItemProps extends InputProps {
  name: string;
  rules?: Array<Rule>;
}
const FormItem = forwardRef<TextInput, FormItemProps>((props, ref) => {
  const {
    name,
    onChangeText: onChangeTextProps,
    placeholder,
    rules,
    value: valueProps,
    onEndEditing,
    ...rest
  } = props;
  const [value, setValue] = useState<string | undefined>(valueProps || '');
  const [isTouched, setIsTouched] = useState(false);
  const instance = useFormInstance();
  const message = useCheckRules({
    field: placeholder,
    rules: rules,
    value,
  });

  useEffect(() => {
    const valuePProps = valueProps ?? -1;
    if (valuePProps !== -1 && valuePProps !== value) {
      setValue(valuePProps);
    }
  }, [value, valueProps]);
  if (!instance) {
    throw new Error(
      'Please add form instance before using FormItem, your current FormInstance now is ' +
        typeof instance,
    );
  }
  const { addData, addError } = instance;

  const onAddError = (err: string | null) => {
    if (!name) {
      return;
    }
    addError(name, err || undefined);
  };

  useEffect(() => {
    onAddError(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  const onChange = (value: string) => {
    setValue(value);
    if (isFunction(onChangeTextProps)) {
      onChangeTextProps(value);
    }
    if (!name) {
      return;
    }
    addData(name, value);
  };

  const onTouch = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    if (isFunction(onEndEditing)) {
      onEndEditing(event);
    }
    setIsTouched(true);
  };

  return (
    <Input
      {...rest}
      ref={ref}
      onEndEditing={onTouch}
      onChangeText={onChange}
      placeholder={placeholder}
      errorMessage={(message && isTouched) ? message : ''}
      value={value}
    />
  );
});

export default FormItem;
