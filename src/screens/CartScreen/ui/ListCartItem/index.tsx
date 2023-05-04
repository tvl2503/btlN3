import React, { ElementType, FC } from 'react';
import { FlatList, FlatListProps, ListRenderItem } from 'react-native';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { TYPOGRAPHY_VARIANT } from '../../../../constants/theme/typography';
import { CartItem } from '../../../../models/cart';
import { RootState } from '../../../../store/types';
import { CartItemComposed, CenterContainer, ContainerComposed, ImageEmpty, TitleEmpty, Wrapper } from './index.style';

interface ListCartItemProps extends Partial<FlatListProps<any>> {
  as?: ElementType;
}

const ListCartItem: FC<ListCartItemProps> = props => {
  const { as: Component = View, ...rest } = props;
  const items = useSelector<RootState, Array<CartItem>>(
    state => state.cart?.cart,
  );

  const onGetExtractor = (item: CartItem, index: number) => {
    return index.toString();
  };

  const onRender: ListRenderItem<CartItem> = ({ item }) => {
    return (
      <Wrapper>
        <CartItemComposed data={item} />
      </Wrapper>
    );
  };

  const onRenderEmpty = () => {
    return (
      <CenterContainer>
        <ImageEmpty source={require('../../../../assets/box-add.png')}/>
        <TitleEmpty variant={TYPOGRAPHY_VARIANT.CAPTION_14_REGULAR}>Giỏ hàng trống</TitleEmpty>
      </CenterContainer>
    );
  };

  return (
    <ContainerComposed as={Component}>
      <FlatList
        {...rest}
        data={items}
        keyExtractor={onGetExtractor}
        renderItem={onRender}
        ListEmptyComponent={onRenderEmpty}
      />
    </ContainerComposed>
  );
};

export default ListCartItem;
