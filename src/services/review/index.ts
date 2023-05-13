
import { REVIEW_API } from "../../constants/apis/review"
import { request } from "../../utils/axios"

export interface ReviewProduct{
    product_id: number
    title: string
    description? : string,
    rating : number,
    media: {
        title: string,
        src: string
    }[]

}
export const getReviewById = (id: string) => {
    return request.post(REVIEW_API.REVIEW_LIST, { product_id : id })
}
export const reviewProduct = (body : ReviewProduct) => {
    return request.post(REVIEW_API.REVIEW_CREATE, body)
    
}
// export const getAllProduct = (body : ProductRequest) => {
//     return request.post(PRODUCT_API.PRODUCT_LIST, body)
// }