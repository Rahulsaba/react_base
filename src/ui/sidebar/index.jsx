import React from "react";
import { useState } from "react";
import logo from '@/assets/logo.svg';
import { Links } from "@/path";
import { List ,House ,X} from "@phosphor-icons/react";

export default function SideBar() {
    const [toggle, setToggle] = useState(0);
    const pathName = [
        { icon: <House size={20} />, path: "/home" },
        { icon: <House size={20} />, path: "/about" }
    ];
    return (
        <div className={`${toggle ? 'w-64 sm:w-screen min-h-screen' : 'w-16 min-h-screen'} p-2 transition  min-h-screen bg-white dark:bg-[#0b0c10] border-r-2`}>
            <div className={"gap-3 flex_between"}>
                <div className="text-main_color">
                    
                </div>
                <div className="relative cursor-pointer flex_main" onClick={() => (setToggle((params) => (!params)))}>
                    {
                        toggle ?
                            <X size={22} className="text-black dark:text-white z-2 " /> :
                            <List size={22}  className="text-black dark:text-white" />
                    }
                </div>
            </div>
            <div>
                <ul className="">
                    {
                        pathName.map((paths, index) => (
                            <li key={index} className="gap-2 p-5 flex_main">
                                <Links
                                    path={paths.path}
                                    content={ toggle ? paths.path.split("/") : '' }
                                    className='flex gap-2'
                                    onClick={() => (setToggle(0))}
                                    icon={paths.icon}
                                />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}