import React, { FC, useEffect, useState } from 'react';
import { GestureResponderEvent } from 'react-native';
import PropTypes from 'prop-types';
import { CheckBoxComposedComponent, CheckboxIcon } from './index.style';
import { CheckBoxProps, CHECKBOX_SIZE, CHECKBOX_VARIANT } from './index.types';
import { IONICONS_NAME } from '../../constants/icons/ionicons';
import { isFunction } from 'lodash';

const CheckBox: FC<CheckBoxProps> = props => {
  const { size, active, onCheck, ...rest } = props;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (active === undefined || active === null) {
      return;
    }
    if (active !== isChecked) {
      setIsChecked(active);
    }
  }, [active, isChecked]);

  const onPress = (event: GestureResponderEvent) => {
    if (isFunction(onCheck)) {
      onCheck(event);
    }
    setIsChecked(prevState => !prevState);
  };

  return (
    <CheckBoxComposedComponent
      onPress={onPress}
      size={size}
      active={isChecked}
      {...rest}>
      {isChecked && <CheckboxIcon name={IONICONS_NAME.CHECKMARK} />}
    </CheckBoxComposedComponent>
  );
};

CheckBox.defaultProps = {
  size: CHECKBOX_SIZE.md,
  active: false,
  variant: CHECKBOX_VARIANT.PRIMARY,
};

CheckBox.propTypes = {
  size: PropTypes.oneOf(Object.values(CHECKBOX_SIZE)),
};

export default CheckBox;
