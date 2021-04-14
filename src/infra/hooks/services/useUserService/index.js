import { useState } from 'react';
import { userService } from '../../../../services/user/userService';

export function useUserService(userServiceModule = userService) {
  const [response, setResponse] = useState({
    data: null,
    loading: true,
    error: null,
  });

  return {
    response,
    getProfilePage() {
      userServiceModule.getProfilePage()
        .then((responseFromServer) => {
          setResponse((currentState) => ({
            ...currentState,
            data: responseFromServer,
            loading: false,
            error: null,
          }));
        })
        .catch((err) => {
          setResponse((currentState) => ({
            ...currentState,
            data: null,
            loading: false,
            error: err.message,
          }));
        });
      return response;
    },
  };
}
