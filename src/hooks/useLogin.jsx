//create a custom hook to handle login
import { useContext } from "react";
import {UserContext} from "../context/userProvider"; 

const useLogin = () => {
    return useContext(UserContext);
    }
export default useLogin;