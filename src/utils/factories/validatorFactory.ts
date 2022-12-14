import { Validator } from 'types/frontend';

const validatorFactory = {
  create: <T>(errorMessage: string, validationFunction: (x: T) => boolean): Validator<T> => {
    return {
      errorMessage: errorMessage,
      validationFunction: validationFunction,
    };
  },
};

export default validatorFactory;
