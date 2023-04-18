
import { REVIEW_API } from "../../constants/apis/review"
import { request } from "../../utils/axios"


export const getReviewById = (id: string) => {
    return request.post(REVIEW_API.REVIEW_LIST, { product_id : id })
}
// export const getAllProduct = (body : ProductRequest) => {
//     return request.post(PRODUCT_API.PRODUCT_LIST, body)
// }