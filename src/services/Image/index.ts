import { request } from "../../utils/axios";

export const uploadImageApi = (body : any) => {
    return request.post('/upload/file', body);
}