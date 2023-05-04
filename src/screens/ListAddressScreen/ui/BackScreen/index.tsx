import React, { FC } from 'react';
import { IONICONS_NAME } from '../../../../constants/icons/ionicons';
import { AliasComponent } from '../../../../types';
import { BackScreenWrapper } from './index.style';

interface BackScreenProps extends AliasComponent {

};

const BackScreen: FC<BackScreenProps> = (props) => {
  return (
    <BackScreenWrapper name={IONICONS_NAME.CHEVRON_BACK} {...props}/>
  )
};

export default BackScreen;
