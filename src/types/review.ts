

export type Review = {
    _id : string,
    description? : string,
    time_creation: number,
    media : {
        title?: string,
        src : string
    }[],
    product: string,
    rating: number,
    title: string,
    user: {
        username: string
    }
}