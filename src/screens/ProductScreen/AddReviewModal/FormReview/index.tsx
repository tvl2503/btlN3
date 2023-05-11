import React, { useState } from "react";
import { ButtonUploadImage, FormWrapper, InputDescription, MainForm, RateStarInput, RateWrapper, TextButtonUpload, UploadImageWrapper } from "./index.styles";
import Input from "../../../../core/Input";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import Button from "../../../../core/Button";
import { Text } from "react-native";
import Icons from "../../../../core/Icons";
import Modal from "../../../../core/Modal";
const options = {
    title: "Chọn ảnh",
    type: "library",
    options : {
        maxHeight : 200,
        maxWidth: 200,
        selectionLimit : 0,
        mediaType: 'photo',
        includeBase64 : false
    }
}
const FormReview = () => {
    const [star, setStar] = useState<number>(0);
    const openGallery = async () => {
        
        const result = await launchImageLibrary(options)
        console.log(result);
        
    }
    return(
        <>
        <FormWrapper>
            <RateWrapper>
                <RateStarInput onFinishRating = {(rating: number) => setStar(rating)} fractions = {0} startingValue = {star}  />
            </RateWrapper>
            <MainForm>
                <Input style = {{marginBottom: 16}} placeholder="Tiêu đề" />
                <InputDescription style = {{textAlignVertical : 'top'}} numberOfLines={5} multiline = {true} placeholder="Chia sẻ cảm nhận, đánh giá của bạn về sản phẩm" />
                <UploadImageWrapper>

                <ButtonUploadImage onPress={openGallery}>
                    <TextButtonUpload>
                        <Icons.Ionicons name="image-sharp" size={14} />
                        Thêm ảnh/video
                    </TextButtonUpload>
                </ButtonUploadImage>
                </UploadImageWrapper>
            </MainForm>
        </FormWrapper>
        </>
    )
}

export default FormReview