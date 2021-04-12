import { createContext } from 'react';

export const WebsitePageContext = createContext({
  toggleModalRegister: () => { },
  getCMSContent: (cmsKey) => cmsKey,
});
