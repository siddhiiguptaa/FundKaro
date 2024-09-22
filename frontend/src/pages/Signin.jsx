import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"


export const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSignIn = async ()=> {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signin",{
                username,
                password
            });

            if(response.data.token){
                localStorage.setItem("token",response.data.token);
                navigate("/dashboard");
            } else{
                setError("Login failed: No token received");
            }
            
        } catch (error) {
            if(error.response && error.response.status === 411){
                setError(error.response.data.message || "Incorrect inputs");
            } else {
                setError("An error occurred during sign-in. Please try again.")
            }
            
        } finally {
            setLoading(false);
        }
    };

    return (
     <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign in"} />
        <SubHeading label={"Enter your credentials to access your account"} />
        <InputBox 
            onChange={e => setUsername(e.target.value)}
            placeholder="xyz@gmail.com" label={"Email"} 
         />

        <InputBox onChange={e => setPassword(e.target.value)}
            placeholder="123456" label={"Password"} 
         />
        <div className="pt-4">
          <Button onClick={handleSignIn}
           label={loading ? "Signing in..." : "Sign in"} 
           disabled={loading} // Disable the button while loading
           />
        </div>
        {error && <div className="text-red-500 pt-2">{error}</div>} 
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
 );
};