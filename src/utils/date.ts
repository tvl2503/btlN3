

export const getDayMonth= (time: number) : string => {
    const date = new Date(time);

    return `${date.getDay() + 1} tháng ${date.getMonth() + 1}`;
}