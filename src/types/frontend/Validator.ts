export type Validator<T> = {
  errorMessage: string;
  validationFunction: (property: T) => boolean;
};
