import { PASSWORD_REGEX } from '../../../../constants/regex';

export const password = (value: string) => {
  const isValid = PASSWORD_REGEX.test(value);
  if (!isValid) {
    return Promise.reject(
      'phải có tối thiểu 8 ký tự, 1 chữ số và 1 chữ cái đặc biệt',
    );
  }
  return true;
};
