import { EMAIL_REGEX } from "../../../../constants/regex"
import { Rule } from "../../index.types"

export const email: Rule = (value: string) => {
  const isValid = EMAIL_REGEX.test(value);
  if (!isValid) {
    return Promise.reject('không hợp lệ');
  }
  return true;
};
