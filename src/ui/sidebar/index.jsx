import { useState } from "react";
import logo from '@/assets/logo.svg';
import pathName from './navbar';
import { Links } from "@/path";
import { SignIn, SignOut } from "@phosphor-icons/react";

export default function SideBar() {
    const [toggle, setToggle] = useState(false);


    return (
        <div className={`${toggle ? 'w-64 sm:w-screen' : 'w-16'} transition  min-h-screen bg-[#0b0c10]`}>
            <div className="p-5 flex_between">
                <div className="text-main_color">
                    JSR
                </div>
                <div className="cursor-pointer flex_main " onClick={() => (setToggle((params) => (!params)))}>
                    {
                        toggle ?
                            <SignOut size={22} className="text-white" /> :
                            <SignIn size={22} className="text-white" />
                    }
                </div>
            </div>

            <div>
                {
                    pathName.map((paths) => (
                        <ul key={paths.length} className=" flex_main">
                            <li className="p-5">
                                <Links
                                    path={paths}
                                    content={paths.split('/') }
                                    className=''
                                    onClick={() => (setToggle(0))}
                                />
                            </li>
                        </ul>
                    ))
                }
            </div>
        </div>
    )
}