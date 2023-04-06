import { Rule } from "../../index.types";

const required: Rule = (value: string) => {
  if (value.length === 0) {
    return Promise.reject('không được để trống');
  }
  return true;
};

export default required;
