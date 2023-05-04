import { isFunction } from 'lodash';
import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { ACTION_TYPE } from '../../../constants/actions';
import { IONICONS_NAME } from '../../../constants/icons/ionicons';
import { BUTTON_VARIANT } from '../../../constants/theme/button';
import { TYPOGRAPHY_VARIANT } from '../../../constants/theme/typography';
import Row from '../../../core/Row';
import Typography from '../../../core/Typography';
import useCallApi from '../../../hook/useCallApi';
import useDispatchAction from '../../../hook/useDispatchAction';
import { Address } from '../../../models/address';
import { AddressDetail } from '../../../screens/CartScreen/ui/Address/index.style';
import { deleteAddress } from '../../../services/address';
import { AliasComponent } from '../../../types';
import {
  AddressContainer,
  AddressDetailContainer,
  Col,
  IconAddressComposed,
  Marker,
  RemoveButtonContainer,
  IconWrapper
} from './index.style';

interface AddressElementProps extends AliasComponent {
  data?: Address;
  onHandle?: (id: string) => void;
}
const AddressElement: FC<AddressElementProps> = props => {
  const { data, onHandle, ...rest } = props;
  const id = data?._id;
  const dispatchAction = useDispatchAction();

  const onDelete = () => {
    return deleteAddress(id!);
  };

  const onSuccess = () => {
    dispatchAction(ACTION_TYPE.DELETE_ADDRESS, {
      id
    });
  };

  const onError = (err: string) => {
    console.log(err);
  };

  const { isLoading, send } = useCallApi({
    request: onDelete,
    success: onSuccess,
    error: onError
  });

  const onRemove = () => {
    send();
  };

  const onNavigate = () => {
    if (isFunction(onHandle)) {
      onHandle(id);
    }
  };

  return (
    <TouchableOpacity {...rest} onPress={onNavigate} disabled={isLoading}>
      <AddressContainer>
        <Row>
          <IconAddressComposed>
            <Marker name={IONICONS_NAME.MAP_MARKER} />
          </IconAddressComposed>
          <Col>
            <Typography variant={TYPOGRAPHY_VARIANT.TITLE_15_MEDIUM}>
              {data?.name}
            </Typography>
            <AddressDetailContainer>
              <AddressDetail variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
                {data?.detail}, {data?.district}, {data?.ward}, {data?.city}
              </AddressDetail>
            </AddressDetailContainer>
            <Typography variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
              {data?.phone}
            </Typography>
          </Col>
        </Row>
        <RemoveButtonContainer disabled={isLoading} onPress={onRemove} variant={BUTTON_VARIANT.text}>
          <IconWrapper name={IONICONS_NAME.CLOSE_OUTLINE}/>
        </RemoveButtonContainer>
      </AddressContainer>
    </TouchableOpacity>
  );
};

export default AddressElement;
