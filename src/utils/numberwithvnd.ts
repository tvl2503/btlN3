const numberWithVND = (num : number) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num)
export default numberWithVND