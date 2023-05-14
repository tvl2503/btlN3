import React, { FC } from 'react';
import { AliasComponent } from '../../../../types';
import { BoxActionContainer, RowComposed } from './index.style';
import ActionElement from '../ActionElement';
import { ACTION_PROFILE } from '../../../../constants/profile';
import { useNavigation } from '@react-navigation/native';

interface BoxActionsProps extends AliasComponent {}
const BoxActions: FC<BoxActionsProps> = props => {
  const { ...rest } = props;
  const navigation = useNavigation();

  const onPress = (item: any) => {
    navigation.navigate(item?.navigation, item?.params || {});
  };
  return (
    <BoxActionContainer {...rest}>
      <RowComposed>
        {ACTION_PROFILE.map(item => <ActionElement onPress={() => onPress(item)} key={item?.title} item={item}/>)}
      </RowComposed>
    </BoxActionContainer>
  );
};



export default BoxActions;
