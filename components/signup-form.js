
import React from "react";


const Signup = () => {
  const [signPayload, setSignPayload] = useState({
    name: "",
    email: "",
    password: "",

  });

  const [signupStage, setSignupStage] = useState(0);
  const handleInputField = (e) => {
    const { name, value } = e.target;
    setSignPayload((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  return (
    <div>
        <Header/>
        
    </div>
  )
}

export default Signup

