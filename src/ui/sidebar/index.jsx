import { useState } from "react";
import logo from '@/assets/logo.svg';
import pathName from './navbar';
import { Links } from "@/path";

export default function SideBar() {
    const [toggle, setToggle] = useState(0);
   
    
    return (
        <div className={`${toggle ? 'w-64' : 'w-16'} transition  min-h-screen bg-[#0b0c10]`}>
            <div className="flex ">
                <div>
                    <img src={logo} alt="logo" width={150} height={100} />
                </div>
                <div className="cursor-pointer flex_main " onClick={(e) => (setToggle((params) => (!params)))}>
                    icon
                </div>
            </div>

            <div>
                {
                    pathName.map((paths) => (
                        <ul key={paths.length} className=" flex_main">
                            <li className="p-5">
                                <Links path={paths} content={paths.split('/')}  />
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}