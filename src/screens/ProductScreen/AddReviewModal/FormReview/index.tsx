import React, { useState } from "react";
import { ButtonUploadImage, FormWrapper, InputDescription, MainForm, RateStarInput, RateWrapper, TextButtonUpload, UploadImageWrapper } from "./index.styles";
import Input from "../../../../core/Input";
import Icons from "../../../../core/Icons";
import Modal from "../../../../core/Modal";
import { openImagePicker } from "../../../../utils/ImageUtils";
import { uploadImageApi } from "../../../../services/Image";
import randString from 'random-string'

export function getExtByUrl(url: string) {
    let temp = url
    temp = temp.substr(1 + url.lastIndexOf('/'))
  
    temp = temp.split('?')[0]
  
    temp = temp.split('#')[0]
    temp = temp.split('.')[1] || ''
    return temp
  }
  export const getMimeTypeByExtension = (ext: string) => {
    switch (ext) {
      case 'svg':
        return 'image/svg+xml'
      case 'jpg':
      case 'jpeg':
        return 'image/jpeg'
      case 'png':
        return 'image/png'
      case 'gif':
        return 'image/gif'
      case 'webp':
        return 'image/webp'
  
      case 'aac':
        return 'audio/aac'
      case 'mp3':
      case 'mpe':
      case 'mpg':
      case 'mpga':
        return 'audio/mpeg'
      case 'm3u':
        return 'audio/x-mpegurl'
  
      case 'mov':
        return 'video/quicktime'
      case 'mp4':
        return 'video/mp4'
      case 'avi':
        return 'video/x-msvideo'
      case '3gp':
        return 'video/3gpp'
      case 'm3u8':
        return 'application/x-mpegURL'
      case 'flv':
        return 'video/x-flv'
      case 'wmv':
        return 'video/x-ms-wmv'
      default:
        return ''
    }
  }
const FormReview = () => {
    const [star, setStar] = useState<number>(0);
    const uploadImage = async (response : any) => {
        const data = new FormData()
        const ext = getExtByUrl(response.uri)
        const mime = getMimeTypeByExtension(ext)
        const nameDefault = `${randString({ length: 15 })}${ext ? `.${ext}` : ''}`
        const typeDefault = mime || 'video/mp4'
        data.append("file_upload", {
            name: nameDefault,
            type: typeDefault,
            uri:  response.uri
        })
        
        try{
            const res = await uploadImageApi({
              data: [`data:${response.type};base64,${response.base64}`]
        })
        console.log(res);
        }catch(error){
            console.log(error);
            
        }
    }
    const openGallery = async () => {
        openImagePicker(uploadImage)
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