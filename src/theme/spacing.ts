export const lineHeights = {
  title: '28px',
  copy: '20px',
};

export const space = [...Array(10).keys()].reduce((acc, value, index) => {
  return {
    ...acc,
    [index]: `${value * 4}px`,
  };
}, {});
