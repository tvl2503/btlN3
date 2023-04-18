import { Review } from "../models/review"


export const calculateAverageRate = (rates : any) => {
    
    let sumRate = rates?.length || 0
    let anverageRate = rates?.reduce((total : number, item : any) => {
        return total + item.rating
    }, 0)/sumRate

    return anverageRate 
}
type numberRate = {
    percentage : number,
    rating : 1 | 2 | 3 | 4 | 5
}
export const handleNumberRate  = (rates : Review[]) : numberRate[]  => {
    const total = rates?.length || 0;
    const ratings = [5, 4, 3, 2, 1];
    const result : numberRate[]  = ratings.reduce((acc : numberRate[], val : any) => {
        const count : number = rates?.filter(item => new Review(item).getRating === val).length;
        const percentage : number = total > 0 ? (count / total)  : 0;
        return [...acc, { rating: val, percentage: percentage }];
    }, []);
    return result;
}