import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { buildChainPromise } from '../../utils/buildChainPromise';
import { Rule } from '../index.types';

interface UseCheckRulesParams {
  rules?: Array<Rule>;
  field?: string;
  value?: string | null;
}
const useCheckRules = (props: UseCheckRulesParams) => {
  const { rules, field, value } = props;
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const isUpdated = value ?? -1;
    if (!rules || isEmpty(rules) || isUpdated === -1) {
      setError(null);
      return;
    }
    buildChainPromise(rules as any, value)
      .then(res => {
        if (res) {
          setError(null);
        }
      })
      .catch(err => {
        if (!field) {
          setError(err);
        } else {
          const text = field.toLowerCase();
          setError(text[0].toUpperCase() + text.substring(1) + ' ' + err);
        }
      });
  }, [value, rules, field]);

  return error;
};

export default useCheckRules;
