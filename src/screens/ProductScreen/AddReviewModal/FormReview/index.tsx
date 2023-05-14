import React, { useState } from "react";
import { ButtonSubmitWrapper, ButtonUploadImage, CloseImage, FormWrapper, ImageUpload, ImageUploadWrapper, InputDescription, LoadingUploadImage, MainForm, RateStarInput, RateWrapper, TextButtonUpload, UploadImageWrapper } from "./index.styles";
import Input from "../../../../core/Input";
import Icons from "../../../../core/Icons";
import Modal from "../../../../core/Modal";
import { openImagePicker } from "../../../../utils/ImageUtils";
import { uploadImageApi } from "../../../../services/Image";
import randString from 'random-string'
import axios from "axios";
import { IONICONS_NAME } from "../../../../constants/icons/ionicons";
import { COLORS } from "../../../../theme/colors";
import { ActivityIndicator, View } from 'react-native';
import Button from "../../../../core/Button";
import { BUTTON_VARIANT } from "../../../../constants/theme/button";
import { BUTTON_SIZE } from "../../../../core/Button/index.types";
import Form from "../../../../core/Form";
import required from "../../../../core/Input/rules/required";
import { INPUT_VARIANT } from "../../../../constants/theme/input";
import { FormData } from "../../../../core/Form/FormInstance";
import { ReviewProduct, reviewProduct } from "../../../../services/review";
import useCallApi from "../../../../hook/useCallApi";

interface Props {
  id : string,
  onHide: any
}
const FormReview : React.FC<Props> = ({id, onHide}) => {
    const [star, setStar] = useState<number>(0);
    const [images, setImages] = useState<String[]>([]);
    const [isLoadingImage, setIsLoadingImage] = useState<boolean>(false);
    const uploadImage = async (response : any) => {
      setIsLoadingImage(true)
        try{
            const res = await uploadImageApi({
              data: [`data:${response.type};base64,${response.base64}`]
            })
            setIsLoadingImage(false)
            setImages([...images, res.data?.data[0]])
        }catch(error){
          setIsLoadingImage(false)
            console.log(error);
            
        }
    }
    const closeImage = (index: number) => {
      const newImages = images.filter((_, i) => i !== index)
      setImages(newImages)
    }
    const openGallery = async () => {
        openImagePicker(uploadImage)
    }
    const onCreate = (data: ReviewProduct) => {
      return reviewProduct(data);
    };
    const onCallbackSuccess = (data: ReviewProduct) => {
      onHide()
    };
    const onCallbackError = () => {

    }
    const { isLoading, send } = useCallApi({
      request: onCreate,
      success: onCallbackSuccess,
      error: onCallbackError,
    });
    const onSubmitForm = (data: FormData) => {
      const media = images.map((item, index) => {
        return {title: index, src: item}
      })
      send({...data, rating: star, product_id : id, media })
    }
    return(
        <Form onSubmit={onSubmitForm} >
          {
            ({isValidForm, onSubmit}) => {
              return (
                <>
                  <FormWrapper>
                    <RateWrapper>
                        <RateStarInput onFinishRating = {(rating: number) => setStar(rating)} fractions = {0} startingValue = {star}  />
                    </RateWrapper>
                    <MainForm>
                        <Form.Input 
                          variant = {INPUT_VARIANT.FILL_WHITE}
                          placeholder="Tiêu đề"
                          name="title"
                          rules={[required]}
                        />
                        <InputDescription styleInput = {{textAlignVertical : 'top'}} name="description"  numberOfLines={5} multiline = {true} placeholder="Chia sẻ cảm nhận, đánh giá của bạn về sản phẩm" />
                        <UploadImageWrapper>
                          {isLoadingImage && (
                            <LoadingUploadImage>
                              <ActivityIndicator />
                            </LoadingUploadImage>
                          )}
                          {
                            images.map((item,index) => (
                              <ImageUploadWrapper>
                                <ImageUpload source={{uri : item}} />
                                <CloseImage>
                                  <Icons.Ionicons onPress={() => closeImage(index)} name = {IONICONS_NAME.CLOSE_CIRCLE} size={18} color={COLORS.gray_6} />
                                </CloseImage>
                              </ImageUploadWrapper>
                            ))
                          }
                          <ButtonUploadImage onPress={openGallery}>
                              <TextButtonUpload>
                                  <Icons.Ionicons name="image-sharp" size={14} />
                                  Thêm ảnh/video
                              </TextButtonUpload>
                          </ButtonUploadImage>
                        </UploadImageWrapper>
                    </MainForm>
                </FormWrapper>
                <ButtonSubmitWrapper>
                  <Button
                    loading={isLoading}
                    onPress={onSubmit}
                    disabled={!isValidForm ||isLoading || isLoadingImage}
                    variant={BUTTON_VARIANT.secondary}
                    fullWidth
                    size={BUTTON_SIZE.lg}
                  >Gửi đánh giá</Button>
                </ButtonSubmitWrapper>
              </>
              )
            }
          }
        </Form>
    )
}

export default FormReview