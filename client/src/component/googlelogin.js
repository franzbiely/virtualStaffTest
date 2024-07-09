import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon

const GoogleSignInButton = ({ onLoginSuccess }) => {
  const onSuccess = (response) => {
    console.log('Login Success:', JSON.stringify(response));
  //   const profile = response.profileObj;
  // const email = profile.email;
  // const name = profile.name;
  // const imageUrl = profile.imageUrl;

  // Use the extracted information here (e.g., store in context, send to backend)
  // console.log('User Email:', email);
  // console.log('User Name:', name);
  // console.log('User Image URL:', imageUrl);
    onLoginSuccess(response); // Pass login data to parent component
  };

  const onFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <GoogleLogin
      clientId="894127184138-jlkp0nfrep1btc9c7fa2f727e63v9dbu.apps.googleusercontent.com"
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy="single_host_origin"
      render={(renderProps) => (
        <button type="button" onClick={renderProps.onClick}>
          <FaGoogle /> Login with Google
        </button>
      )}
    />
  );
};

export default GoogleSignInButton;