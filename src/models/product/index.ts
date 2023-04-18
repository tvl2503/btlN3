import { Review } from "../review";

export class Product {
    private name: string;
    private description?: string;
    private quantity?: number;
    private _id: string;
    private like?: number;
    private num_buy: number;
    private num_reviews: number;
    private price: {
        discount_price?: number;
        original_price: number
    };
    private media_urls: {
        src : string;
        title?: string;
    }[];
  
    constructor(props: Product) {
      this.name = props.name;
      this.description = props.description;
      this.quantity = props.quantity;
      this._id = props._id;
      this.like = props.like;
      this.num_buy = props.num_buy;
      this.num_reviews = props.num_reviews;
      this.price = props.price;
      this.media_urls = props.media_urls;
    }
  
    public get getName(): string | undefined {
      return this.name;
    }
    public get getDescription(): string | undefined {
      return this.description;
    }
    public get getId(): string {
      return this._id;
    }
    public get getQuantity() : number | undefined{
        return this.quantity;
    }
    public get getLike(): number | undefined{ 
        return this.like;
    }
    public get getNumbuy() : number{
        return this.num_buy;
    }
    public get getNumReviews() : number{
        return this.num_reviews;
    }
    public get getPrice() :  { discount_price?: number; original_price: number}{
        return this.price
    }
    public get getMediaUrls() : { src: string; title?: string}[]{
        return this.media_urls
    }
  };
  