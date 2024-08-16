import { useState, useEffect } from "react";
import { CloudSun, CloudMoon, Power } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [count, setCount] = useState(localStorage.theme);
  const { loading, error, success, userToken } = useSelector((state) => state.auth);



  const removeTocken = async () => {
    await localStorage.removeItem('token');
    await navigate('/login');
  };



  useEffect(() => {

  }, [!userToken, navigate]);

  useEffect(() => {
    localStorage.theme = count
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    if (count == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [count]);
  return (
    <div className="h-16 p-4 text-black flex_between border-b-neutral-900 dark:bg-black dark:text-white">
      header
      <div className="gap-2 flex_main">
        {
          count == 'light' ?
            <CloudMoon size={30} className="cursor-pointer" onClick={() => setCount("dark")} /> :
            <CloudSun size={30} className="cursor-pointer" onClick={() => setCount("light")} />
        }
         <Power size={30} onClick={removeTocken} className="cursor-pointer" />
      </div>
    </div>
  )
}