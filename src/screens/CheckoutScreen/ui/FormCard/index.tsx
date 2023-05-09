import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from '../../../../core/Form';
import Row from '../../../../core/Row';
import { AliasComponent } from '../../../../types';
import { FormInputContainer } from './index.style';
import required from '../../../../core/Input/rules/required';
import { PaymentMethodProps } from '../CartItemElement/index.types';

interface FormCardProps extends AliasComponent {
  data?: PaymentMethodProps
}

const FormCard: FC<FormCardProps> = props => {
  const { as: Component = View, data, ...rest } = props;
  return (
    <Component {...rest}>
      <FormInputContainer>
        <Form.Input
          placeholder="Số thẻ"
          keyboardType="number-pad"
          name="number"
          rules={[required]}
          defaultValue={data?.card?.number}
        />
      </FormInputContainer>
      <Row>
        <FormInputContainer style={styles.full}>
          <Form.Input
            placeholder="Tháng"
            keyboardType="number-pad"
            name="exp_month"
            rules={[required]}
            defaultValue={data?.card?.exp_month}
          />
        </FormInputContainer>
        <FormInputContainer style={styles.space}>
          <Form.Input
            placeholder="Năm"
            keyboardType="number-pad"
            name="exp_year"
            rules={[required]}
            defaultValue={data?.card?.exp_year}
          />
        </FormInputContainer>
      </Row>
      <FormInputContainer>
        <Form.Input defaultValue={data?.card?.cvc} rules={[required]} placeholder="Số CVC" keyboardType="number-pad" name="cvc" />
      </FormInputContainer>
    </Component>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
  },
  space: {
    marginLeft: 16,
    flex: 1,
  },
});

export default FormCard;
