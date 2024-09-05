export const msalConfig = {
  auth: {
    clientId: "965cbf64-e4d2-446f-8742-a80ccf342b26", 
    authority: "https://login.microsoftonline.com/92576484-2e7f-4a20-9231-5c63077b55ed", 
    redirectUri: "http://localhost:5173/", 
  },
  cache: {
    cacheLocation: "localStorage", 
    storeAuthStateInCookie: false, 
  },
};

export const loginRequest = {
  scopes: ["User.Read"],
};
