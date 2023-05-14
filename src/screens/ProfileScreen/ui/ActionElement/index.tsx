import React, { FC, ReactNode } from 'react';
import { ActionElementContainer, Title } from './index.style';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { useTheme } from 'styled-components';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AliasComponent } from '../../../../types';

interface ItemProps {
  title: string;
  icon: ReactNode;
}
interface ActionElementProps extends AliasComponent, TouchableOpacityProps {
  item?: ItemProps;
}
const ActionElement: FC<ActionElementProps> = props => {
  const { item, ...rest } = props;
  const theme = useTheme() as any;
  const renderItem = () => {
    return React.cloneElement(item?.icon as any, {
      size: 24,
      color: theme.colors.neutral_2,
    });
  };

  return (
    <TouchableOpacity {...rest}>
      <ActionElementContainer>
        {renderItem()}
        <Title variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>
          {item?.title}
        </Title>
      </ActionElementContainer>
    </TouchableOpacity>
  );
};

export default ActionElement;
