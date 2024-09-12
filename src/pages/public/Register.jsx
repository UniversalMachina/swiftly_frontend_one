import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RegisterComponent from "../../components/public/Authentication/RegisterComponent";




const Register = ({ onLogin }) => {
  const location = useLocation();
  const [paymentInfo, setPaymentInfo] = useState({ username: "", plan: "" });

  useEffect(() => {
    // Only proceed if location.state is available
    if (location.state) {
      // Directly set paymentInfo with location.state
      setPaymentInfo(location.state);
    }
  }, [location, location.state]); // Depend on location and location.state


  return (

        <RegisterComponent plan={paymentInfo.plan} onLogin={onLogin}/>

  );
};

export default Register;
