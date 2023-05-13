import { request } from "../../utils/axios";

export const uploadImageApi = (body : any) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
       }
    }
    return request.post('/upload/file', body, config);
}