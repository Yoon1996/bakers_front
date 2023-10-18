import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";

const GoogleLoginButtonComponent = () => {
  const clientId =
    "926618531398-36t5psht9gd5c2sk9irjdf8vlvltpd22.apps.googleusercontent.com";

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            console.log(res);
          }}
          onFailure={(err) => {
            console.log(err);
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButtonComponent;
