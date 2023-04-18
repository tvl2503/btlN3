import { PRODUCT_API } from "../../constants/apis/product"
import { request } from "../../utils/axios"
import { ProductRequest } from "./index.types"


export const getProduct = (id: string) => {
    return request.get(PRODUCT_API.PRODUCT + id)
}
export const getAllProduct = (body : ProductRequest) => {
    return request.post(PRODUCT_API.PRODUCT_LIST, body)
}