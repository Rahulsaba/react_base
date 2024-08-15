import { useState,useEffect } from "react";
import { CloudSun, CloudMoon ,Power} from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [count, setCount] = useState('light');
    const { loading, error, success, userToken } = useSelector((state) => state.auth);
    // console.log(localStorage.theme, 'localStorage.theme');


    // if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    //     //add class=dark in html element
    //     document.documentElement.classList.add("dark");
    // } else {
    //     //remove class=dark in html element
    //     document.documentElement.classList.remove("dark");
    // }
    // console.log(count, 'count');

    // if (localStorage.theme === `${count}`) {
    //     localStorage.theme = "light";
    // } else {
    //     localStorage.theme = "dark";
    // }
    const removeTocken = async () => {
        await localStorage.removeItem('token');
        await navigate('/login');
      };
    
    //onClick={() => setCount("dark")}
      useEffect(() => {
        // Automatically navigate to login page after removing the token
      }, [!userToken, navigate]);
    return (
        <div className="h-16 p-4 flex_between">
            header
            <div className="gap-2 flex_main">
            <Power size={30} onClick={removeTocken} className="cursor-pointer"/>
                <CloudSun size={30}  />
                <CloudMoon size={30} />
            </div>
        </div>
    )
}