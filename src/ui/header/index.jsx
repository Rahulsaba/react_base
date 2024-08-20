import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { CloudSun, CloudMoon, Power, Bell } from "@phosphor-icons/react";

export default function Header() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.theme);
  const { loading, error, success, userToken } = useSelector((state) => state.auth);



  const removeTocken = async () => {
    await localStorage.removeItem('token');
    await navigate('/login');
  };



  useEffect(() => {

  }, [!userToken, navigate]);

  useEffect(() => {
    localStorage.theme = theme
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    if (theme == 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme]);
  return (
    <div className="h-16 p-4 text-black border-b-2 flex_between dark:bg-black dark:text-white">
      header
      <div className="gap-2 flex_main">
        <span className=" absolute  right-24 z-10 top-4 text-white  bg-red-600 p-1 rounded-full w-auto h-4 text-[10px] flex_main ">
          1+
        </span>
        <Bell size={30} className="relative " />
        {
          theme == 'light' ?
            <CloudMoon size={30} className="cursor-pointer" onClick={() => setTheme("dark")} /> :
            <CloudSun size={30} className="cursor-pointer" onClick={() => setTheme("light")} />
        }
        <Power size={30} onClick={removeTocken} className="cursor-pointer" />
      </div>
    </div>
  )
}