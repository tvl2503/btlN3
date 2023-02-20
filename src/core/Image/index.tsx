import { isFunction, isObject } from 'lodash';
import React, { FC, useState } from 'react';
import { ImageErrorEventData, NativeSyntheticEvent } from 'react-native/types';
import Spinner from '../Spinner';
import { ImageComponentComposed, LoadingContainer } from './index.style';
import { ImageProps } from './index.types';

const Image: FC<ImageProps> = props => {
  const { source, onError, ...rest } = props;
  const [sourceImage, setSourceImage] = useState(source);
  const [loaded, setLoaded] = useState(false);

  const onHandleError = (event: NativeSyntheticEvent<ImageErrorEventData>) => {
    if (isFunction(onError)) {
      onError(event);
    }
    const src = require('../../assets/default.png');
    if (isObject(sourceImage)) {
      return setSourceImage(src);
    }
  };

  const onLoadedImage = () => {
    setLoaded(true);
  };
  return (
    <>
      {!loaded && (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      )}
      <ImageComponentComposed
        onError={onHandleError}
        source={sourceImage}
        onLoad={onLoadedImage}
        {...rest}
      />
    </>
  );
};

export default Image;
