import { isEmpty, isFunction } from 'lodash';
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Renderer } from '..';

export interface FormData {
  [key: string]: any;
}

export interface FormError {
  [key: string]: string;
}
export interface FormContextProps {
  isValidForm: boolean;
  data: FormData;
  errors: FormError;
  addData: (key: string, value: any) => void;
  addError: (key: string, value?: string) => void;
  onSubmit: (data: FormData) => any;
}

export interface FormInstanceProps {
  children?: ReactNode | Renderer;
  onSubmit?: (data: FormData) => any;
}
const FormContext = createContext<FormContextProps>({
  isValidForm: false,
  data: {},
  errors: {},
  addData: (_: string, __: any) => {},
  addError: (_: string, __?: string) => {},
  onSubmit: (_: FormData) => {}
});

export const useFormInstance = () => {
  return useContext(FormContext);
};

const FormInstance: FC<FormInstanceProps> = props => {
  const { children, onSubmit: onSubmitProps } = props;
  const isDirty = useRef(false);
  const [data, setData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormError>({});

  const isValidForm = useMemo(() => {
    if (!isDirty.current) {
      isDirty.current = true;
      return false;
    }
    if (!isEmpty(errors)) {
      return false;
    }
    return true;
  }, [errors]);

  const addData = (key: string, value: any) => {
    setData(prevState => {
      return {
        ...prevState,
        [key]: value,
      };
    });
  };

  const addError = (key: string, value?: string) => {
    if (!value) {
      const obj = { ...errors };
      if (key in obj) {
        delete obj[key];
        setErrors(obj);
      }
    } else {
      setErrors(prevState => {
        return {
          ...prevState,
          [key]: value,
        };
      });
    }
  };

  const onSubmit = () => {
    if (!isValidForm) {
      return;
    }
    if (isFunction(onSubmitProps)) {
      onSubmitProps(data);
    }
    return data;
  };

  const render = () => {
    if (isFunction(children)) {
      return children({
        onSubmit,
        data,
        isValidForm,
        errors,
        addData,
        addError,
      });
    }
    return children;
  };

  return (
    <FormContext.Provider
      value={{
        data,
        errors,
        isValidForm,
        addData,
        addError,
        onSubmit,
      }}>
      {render()}
    </FormContext.Provider>
  );
};

export default FormInstance;
