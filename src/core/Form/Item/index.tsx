import { isFunction } from 'lodash';
import React, { forwardRef } from 'react';
import { TextInput } from 'react-native/types';
import Input from '../../Input';
import { InputProps } from '../../Input/index.types';
import { useFormInstance } from '../FormInstance';

interface FormItemProps extends InputProps {
  name?: string;
}
const FormItem = forwardRef<TextInput, FormItemProps>((props, ref) => {
  const { name, onChangeText: onChangeTextProps, ...rest } = props;
  const instance = useFormInstance();
  if (!instance) {
    throw new Error('Please add form instance before using FormItem, your current FormInstance now is ' + typeof instance);
  }
  const { addData, addError } = instance;

  const onAddError = (err: string | null) => {
    if (!name) {
      return;
    }
    addError(name, err || undefined);
  };

  const onChange = (value: string) => {
    if (isFunction(onChangeTextProps)) {
      onChangeTextProps(value);
    }
    if (!name) {
      return;
    }
    addData(name, value);
  };

  return (
    <Input {...rest} ref={ref} onChangeText={onChange} getError={onAddError} />
  );
});

export default FormItem;
