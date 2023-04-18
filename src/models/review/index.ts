import { User } from "../user";

export class Review{
    private rating : number;
    private title : string;
    private description?: string;
    private media : {
        title?: string;
        src : string;
    }[];
    private _id: string;
    private user :  User;
    constructor(props: Review) {
        this.rating = props.rating;
        this.title = props.title;
        this.description = props.description;
        this.media = props.media;
        this._id = props._id;
        this.user = props.user
    }
    public get getRating() :number{
        return this.rating;
    }
    public get getTitle() : string{
        return this.title;
    }
    public get getDescription() : string | undefined{
        return this.description;
    }
    public get getMedia() : {title?: string;src : string;}[]{
        return this.media;
    }
    public get getUser() : User {
        return this.user;
    }
}