import React, { FC, ReactNode } from 'react';
import FormInstance, { FormContextProps, FormInstanceProps } from './FormInstance';
import FormItem from './Item';

export type Renderer = (params: FormContextProps) => ReactNode;
export interface FormProps extends FormInstanceProps {
}
const Form: FC<FormProps> = props => {
  return <FormInstance {...props}/>;
};

export default Object.assign(Form, {
  Input: FormItem,
});
