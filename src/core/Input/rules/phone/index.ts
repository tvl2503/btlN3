import { Rule } from '../../index.types';

export const phone: Rule = (value: string) => {
  if (value.length >= 10 && value.length <= 11) {
    return true;
  }
  return Promise.reject('Không đúng!');
};
