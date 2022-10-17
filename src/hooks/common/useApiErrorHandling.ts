import { statusCodePages } from 'appConstants';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { ApiError } from 'types/api';
import { ApiErrorHandlingActions } from 'types/frontend';
import { toaster } from 'utils';

const useApiErrorHandling = (): ApiErrorHandlingActions => {
  const navigate = useNavigate();

  const handleApiError = useCallback(
    (error: ApiError) => {
      const statusCodePage = statusCodePages.find((x) => x.statusCode === error.statusCode);
      if (statusCodePage) {
        navigate(statusCodePage.path);
        return;
      }

      toaster.error(error.message);
    },
    [navigate],
  );

  return {
    handleApiError: handleApiError,
  };
};

export default useApiErrorHandling;
