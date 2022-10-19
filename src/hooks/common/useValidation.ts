import { useCallback, useState } from 'react';
import { ValidationResult, Validator } from 'types/frontend';

const useValidation = <T>(
  initialValue: T,
  ...validators: Validator<T>[]
): [value: T, setValue: (updatedValue: T) => void, validationResult: ValidationResult] => {
  const [value, setValue] = useState<T>(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>({ success: true, errorMessages: [] });

  const validate = useCallback(
    (updatedValue: T): ValidationResult => {
      const errorMessages = validators.filter((x) => !x.validationFunction(updatedValue)).map((x) => x.errorMessage);

      return {
        success: errorMessages.length === 0,
        errorMessages: errorMessages,
      };
    },
    [validators],
  );

  const setValidatedValue = useCallback(
    (updatedValue: T) => {
      const validationResult = validate(updatedValue);

      setValue(updatedValue);
      setValidationResult(validationResult);
    },
    [validate],
  );

  return [value, setValidatedValue, validationResult];
};

export default useValidation;
