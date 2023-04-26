import React, { FC, useState } from 'react';
import { ViewProps } from 'react-native';
import required from '../../../../core/Input/rules/required';
import { AliasComponent } from '../../../../types';
import {
  FormAction,
  FormComposed,
  FormInput,
  FormSubmitButton,
  MainFormContainer,
} from './index.style';
import { phone } from '../../../../core/Input/rules/phone';
import { BUTTON_VARIANT } from '../../../../constants/theme/button';
import { BUTTON_SIZE } from '../../../../core/Button/index.types';
import { FormData } from '../../../../core/Form/FormInstance';
import useCallApi from '../../../../hook/useCallApi';
import { createAddress, CreateAddressBody, CreateAddressResponse } from '../../../../services/address';
import useDispatchAction from '../../../../hook/useDispatchAction';
import { ACTION_TYPE } from '../../../../constants/actions';
import { Address } from '../../../../models/address';

interface FormAddressProps extends AliasComponent<ViewProps> {}
const FormAddress: FC<FormAddressProps> = props => {
  const { ...rest } = props;
  const [err, setErr] = useState<string | null>(null);
  const dispatch = useDispatchAction();

  const onCreate = (data: CreateAddressBody) => {
    return createAddress(data);
  };

  const onCallbackSuccess = (data: CreateAddressResponse) => {
    dispatch<Address>(ACTION_TYPE.CREATE_ADDRESS, data.data!);
  };

  const onCallbackError = (error: string) => {
    setErr(error);
  };

  const { isLoading, send } = useCallApi({
    request: onCreate,
    success: onCallbackSuccess,
    error: onCallbackError,
  });

  const onSubmitForm = (data: FormData) => {
    send(data);
  };
  return (
    <FormComposed onSubmit={onSubmitForm}>
      {({ isValidForm, onSubmit }) => {
        return (
          <>
            {/* <ContainerComposed  {...rest}> */}
            <MainFormContainer {...rest}>
              <FormInput
                placeholder="Tên người nhận"
                name="name"
                rules={[required]}
              />
              <FormInput
                placeholder="Số điện thoại"
                name="phone"
                rules={[phone]}
                keyboardType="numeric"
              />
              <FormInput
                placeholder="Địa chỉ nhận hàng"
                name="detail"
                rules={[required]}
              />
              <FormInput
                placeholder="Tỉnh/Thành phố"
                name="city"
                rules={[required]}
              />
              <FormInput
                placeholder="Quận/Huyện"
                name="district"
                rules={[required]}
              />
              <FormInput
                placeholder="Phường/Xã"
                name="ward"
                rules={[required]}
              />
            </MainFormContainer>
            {/* </ContainerComposed> */}
            <FormAction>
              <FormSubmitButton
                loading={isLoading}
                onPress={onSubmit}
                disabled={!isValidForm || isLoading}
                variant={BUTTON_VARIANT.secondary}
                fullWidth
                size={BUTTON_SIZE.lg}>
                Giao đến địa chỉ này
              </FormSubmitButton>
            </FormAction>
          </>
        );
      }}
    </FormComposed>
  );
};

export default FormAddress;
