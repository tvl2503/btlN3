export interface ProductRequest {
    sort? :{
        key : string;
        operator : -1 | 1
    }
  }