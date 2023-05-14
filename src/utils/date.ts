import moment from "moment";

export const getDayMonth= (time: number) : string => {
    const date = new Date(time);

    return `${date.getDay() + 1} tháng ${date.getMonth() + 1}`;
}

export const getDateFromTime = (time: number) => {
  return moment(time).format('DD-MM-YYYY HH:ss');
};