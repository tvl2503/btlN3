export const toCurrency = (value: number, prefix = 'đ') => {
  return (
    Intl.NumberFormat('vi-VN', {
      currency: 'VND',
      maximumFractionDigits: 0,
    }).format(value) +
    (prefix || '')
  );
};
