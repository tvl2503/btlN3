import { isEqual, isFunction } from 'lodash';
import React, { FC, useEffect, useState } from 'react';
import { FEATHER_ICONS } from '../../../../constants/icons/feather';
import { BUTTON_VARIANT } from '../../../../constants/theme/button';
import { ButtonProps } from '../../../../core/Button/index.types';
import Icons from '../../../../core/Icons';
import { AliasComponent } from '../../../../types';
import { CircleButton, QuantityInput, RowCenter } from './index.style';

export interface QuantityButtonProps extends AliasComponent {
  quantity?: number;
  maxQuantity?: number;
  minQuantity?: number;
  onChangeQuantity?: (quantity: number) => any;
  minusProps?: ButtonProps,
  plusProps?: ButtonProps
}
const QuantityButton: FC<QuantityButtonProps> = props => {
  const {
    quantity: quantityProps,
    maxQuantity,
    minQuantity = 1,
    onChangeQuantity,
    minusProps,
    plusProps,
    ...rest
  } = props;
  const [quantity, setQuantity] = useState(quantityProps ?? 1);

  useEffect(() => {
    const quantityPProps = quantityProps ?? -1;
    if (quantityPProps === -1) {
      return;
    }
    if (!isEqual(quantityPProps, quantity)) {
      setQuantity(quantityPProps);
    }
  }, [quantityProps, quantity]);

  const onChangeText = (value: string) => {
    const payload = value ? +value : 1;
    if (maxQuantity && payload > maxQuantity) {
      return;
    }

    if (payload < minQuantity) {
      return;
    }

    if (isFunction(onChangeQuantity)) {
      onChangeQuantity(payload);
    }
    setQuantity(payload);
  };

  return (
    <RowCenter {...rest}>
      <CircleButton {...minusProps} variant={BUTTON_VARIANT.text}>
        <Icons.Feather name={FEATHER_ICONS.MINUS} size={16} />
      </CircleButton>
      <QuantityInput onChangeText={onChangeText} value={quantity?.toString()} keyboardType="number-pad" />
      <CircleButton {...plusProps} variant={BUTTON_VARIANT.text}>
        <Icons.Feather name={FEATHER_ICONS.PLUS} size={16} />
      </CircleButton>
    </RowCenter>
  );
};

QuantityButton.defaultProps = {
  minQuantity: 1,
  minusProps: {},
  plusProps: {},
};

export default QuantityButton;
