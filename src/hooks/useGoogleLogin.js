import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Custom hook to handle Google Identity Services
const useGoogleLogin = (clientId, plan, username, onLogin) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure the Google Identity Services script is loaded
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the Google Identity Services library with the provided client ID
      google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, [clientId]); // Depend on clientId to re-run the effect if it changes

  // Callback function to handle the response from Google Identity Services
  const handleCredentialResponse = async (response) => {
    const id_token = response.credential;
    try {
      // Send this token to your server
      const result = await axios.post(
        "http://localhost:5000/api/google_login",
        {
          token: id_token,
        }
      );
      console.log("Login successful", result.data);
      const { username, account_subscription } = result.data;

      onLogin(true, username); // Update login state

      // Redirect based on the presence of an account subscription
      if (account_subscription) {
        // If there's an account subscription, navigate to the dashboard
        navigate("/dashboard"); // Adjust the path as needed
      } else {
        // Conditional navigation based on plan
        if (plan === "") {
          // If no plan is specified, redirect to subscriptions page
          navigate("/dashboard");
        } else {
          // If a plan is specified, navigate to Payment Page with plan details
          navigate("/dashboard", { state: { plan, username } });
        }
      }
    } catch (error) {
      console.error("Error logging in", error);
    }
  };

  // Function to programmatically trigger the Google sign-in flow
  const handleGoogleLogin = () => {
    google.accounts.id.prompt(); // This will display the Google One Tap UI
  };

  // Return the login handler so it can be used by components
  return { handleGoogleLogin };
};

export default useGoogleLogin;
