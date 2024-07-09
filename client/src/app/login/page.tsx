"use client"
import Image from "next/image";
import styles from "./../page.module.css";
import { useEffect, useState } from "react";
import React from 'react';
import GoogleSignInButton from '../../component/googlelogin'; // Import your button component
import { GoogleOAuthProvider } from "@react-oauth/google";

export default function Home() {
  const handleLoginSuccess = (response:any) => {
    // Handle successful login with Google response data
    window.location.href='/dashboard'

    console.log('Login successful, user data:', response);
    // Send user data to your backend for authentication or store locally
    };
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
            <h2>Login Form</h2>
            <GoogleOAuthProvider clientId={"894127184138-jlkp0nfrep1btc9c7fa2f727e63v9dbu.apps.googleusercontent.com"}>
              {/* You can add traditional username/password fields if desired */}
              <GoogleSignInButton onLoginSuccess={handleLoginSuccess} />
            </GoogleOAuthProvider>
        </div>
      </div>
    </main>
  );
}
